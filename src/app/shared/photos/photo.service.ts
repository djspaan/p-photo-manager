import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AlbumService } from '../albums/album.service';

import { Photo } from './photo';

const ID_START = 1;
const ID_INCREMENT = 1;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PhotoService {
  // TODO: Make photos the subject
  public subject = new Subject<Photo[]>();
  private photos: Photo[] = [];
  private url = 'api/photos';

  constructor(private http: HttpClient, private albumService: AlbumService) {
    this.init();
  }

  init(): void {
    this.refresh();
  }

  refresh(): void {
    this.http.get<Photo[]>(this.url).subscribe((photos: Photo[]) => {
      // TEMP FIX FOR ID GENERATION
      this.photos = photos;
      this.subject.next(photos);
    });
    // Refresh the albums, so the photos of the albums are updated. DOES NOT WORK WITH FAKE HTTP!
    // this.albumService.refresh();
  }

  all(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.url);
  }

  find(id: number): Observable<Photo> {
    return this.http.get<Photo>(`${this.url}/${id}`);
  }

  getByIds(ids: number[]): Photo[] {
    const photos = [];
    for (const id of ids) {
      photos.push(this.find(id));
    }
    return photos;
  }

  getNextId(): number {
    let highestId = ID_START;
    for (const photo of this.photos) {
      if (photo.id > ID_START) {
        highestId = photo.id;
      }
    }
    return highestId + ID_INCREMENT;
  }

  create(newPhoto: Photo): void {
    const photo = new Photo(this.getNextId(), newPhoto.title, newPhoto.description, newPhoto.location, newPhoto.createdAt);
    this.http.post<Photo>(this.url, photo, httpOptions).subscribe(() => this.refresh());
  }

  update(photo: Photo): void {
    this.http.put(this.url, photo, httpOptions).subscribe(() => this.refresh());
  }

  search(query: string): void {
    const matchingPhotos: Photo[] = [];
    for (const photo of this.photos) {
      if (photo.title.includes(query) || photo.description.includes(query)) {
        matchingPhotos.push(photo);
      }
    }
    this.subject.next(matchingPhotos);
  }

}
