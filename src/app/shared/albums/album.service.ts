import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Subject } from 'rxjs/Subject';

import { Album } from './album';
import { Searchable } from '../searchable';

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
    console.log('albums refreshed');
    this.http.get<Album[]>(this.url).subscribe((albums: Album[]) => { this.albums = albums; this.subject.next(albums); });
  }

  all(): Observable<Album[]> {
    return this.http.get<Album[]>(this.url);
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.url);
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
