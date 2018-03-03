import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Subject } from 'rxjs/Subject';

import { Album } from './album';
import { Searchable } from '../searchable';

@Injectable()
export class AlbumService implements Searchable {
  public albumsChanged = new Subject<Album[]>();
  private albums: Album[] = [];
  private albumsUrl = 'api/albums';

  constructor(private http: HttpClient) {
    this.init();
  }

  init(): void {
    this.http.get<Album[]>(this.albumsUrl).subscribe((albums: Album[]) => this.albums = albums);
    // this.albumsChanged.next(this.albums);
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl);
  }

  search(query: string): void {
    const matchingAlbums: Album[] = [];
    for (const album of this.albums) {
      if (album.name.includes(query) || album.description.includes(query)) {
        matchingAlbums.push(album);
      }
    }
    this.albumsChanged.next(matchingAlbums);
  }
}
