import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Subject } from 'rxjs/Subject';
import { Photo } from '../photos/photo';

import { Album } from './album';
import { Searchable } from '../searchable';

const ID_START = 1;
const ID_INCREMENT = 1;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AlbumService implements Searchable {
  public subject = new Subject<Album[]>();
  private albums: Album[] = [];
  private url = 'api/albums';

  constructor(private http: HttpClient) {
    this.init();
  }

  init(): void {
    this.refresh();
  }

  refresh(): void {
    this.http.get<Album[]>(this.url).subscribe((albums: Album[]) => { this.albums = albums; this.subject.next(albums); });
  }

  all(): Observable<Album[]> {
    return this.http.get<Album[]>(this.url);
  }

  create(newAlbum: Album): void {
    const album = new Album(this.getNextId(), newAlbum.name, newAlbum.description);
    this.http.post<Album>(this.url, album, httpOptions).subscribe(() => this.refresh());
  }

  getNextId(): number {
    let highestId = ID_START;
    for (const album of this.albums) {
      if (album.id > ID_START) {
        highestId = album.id;
      }
    }
    return highestId + ID_INCREMENT;
  }

  search(query: string): void {
    const matchingAlbums: Album[] = [];
    for (const album of this.albums) {
      if (album.name.includes(query) || album.description.includes(query)) {
        matchingAlbums.push(album);
      }
    }
    this.subject.next(matchingAlbums);
  }
}
