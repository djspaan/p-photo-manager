import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Album } from './album';
import { PhotoService } from './photo.service';
import { Searchable } from './searchable';

@Injectable()
export class AlbumService implements Searchable {
  albumsChanged = new Subject<Album[]>();
  private albums: Album[];

  constructor(private photoService: PhotoService) {
    this.initializeAlbums();
  }

  initializeAlbums(): void {
    this.albums = [
      new Album(1, 'Lloret de Mar', 'Vakantie in Lloret', this.photoService.getByIds([ 1, 2, 3 ])),
      new Album(2, 'Alanya', 'Vakantie in Alanya', this.photoService.getByIds([ 4, 5, 6 ])),
      new Album(3, 'Lloret de Mar', 'Vakantie in Lloret', this.photoService.getByIds([ 7, 8, 9 ]))
    ];
    this.albumsChanged.next(this.albums);
  }

  getAlbums(): Album[] {
    return this.albums.slice();
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
