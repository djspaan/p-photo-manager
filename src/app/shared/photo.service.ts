import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Photo, Picture } from './photo';

const ID_START = 1;
const ID_INCREMENT = 1;

@Injectable()
export class PhotoService {
  public photosChanged = new Subject<Photo[]>();
  private photos: Photo[];

  constructor() {
    this.photos = [
      new Photo(1, 'Testfoto 1', 'Dit is de eerste testfoto',
        'http://www.britishairways.com/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/Grenada/20555084_480x480.jpg'),
      new Photo(2, 'Testfoto 2', 'Dit is de tweede testfoto',
        'http://media.fclmedia.com/global-images/fc/holidays/tiles/bali/bali-family-experience-large-476x332.jpg'),
      new Photo(3, 'Testfoto 3', 'Dit is de derde testfoto', 'http://www.destination360.com/travel/beaches/images/s/beach-holidays.jpg'),
      new Photo(4, 'Testfoto 1', 'Dit is de eerste testfoto',
        'http://www.britishairways.com/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/Grenada/20555084_480x480.jpg'),
      new Photo(5, 'Testfoto 2', 'Dit is de tweede testfoto',
        'http://media.fclmedia.com/global-images/fc/holidays/tiles/bali/bali-family-experience-large-476x332.jpg'),
      new Photo(6, 'Testfoto 3', 'Dit is de derde testfoto', 'http://www.destination360.com/travel/beaches/images/s/beach-holidays.jpg'),
      new Photo(7, 'Testfoto 1', 'Dit is de eerste testfoto',
        'http://www.britishairways.com/assets/images/MediaHub/Media-Database/Royalty-free-RF/Destinations/Grenada/20555084_480x480.jpg'),
      new Photo(8, 'Testfoto 2', 'Dit is de tweede testfoto',
        'http://media.fclmedia.com/global-images/fc/holidays/tiles/bali/bali-family-experience-large-476x332.jpg'),
      new Photo(9, 'Testfoto 3', 'Dit is de derde testfoto', 'http://www.destination360.com/travel/beaches/images/s/beach-holidays.jpg')
    ];
    this.photosChanged.next(this.photos.slice());
  }

  getPhotos(): Photo[] {
    return this.photos.slice();
  }

  getById(id: number): Photo {
    for (const photo of this.photos) {
      if (photo.id === id) {
        return photo;
      }
    }
    throw new RangeError(`Photo with id ${id} not found.`);
  }

  getByIds(ids: number[]): Photo[] {
    const photos = [];
    for (const id of ids) {
      photos.push(this.getById(id));
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

  add(newPhoto: Photo): void {
    const photo = new Photo(this.getNextId(), newPhoto.title, newPhoto.description, newPhoto.location, newPhoto.createdAt);
    this.photos.push(photo);
    this.photosChanged.next(this.photos.slice());
  }

  update(id: number, updatedPhoto: Photo) {
    const photo = this.getById(id);
    photo.title = updatedPhoto.title;
    photo.description = updatedPhoto.description;
    photo.location = updatedPhoto.location;
    this.photosChanged.next(this.photos.slice());
  }

  search(query: string): void {
    const matchingPhotos: Photo[] = [];
    for (const photo of this.photos) {
      if (photo.title.includes(query) || photo.description.includes(query)) {
        matchingPhotos.push(photo);
      }
    }
    this.photosChanged.next(matchingPhotos);
  }

}
