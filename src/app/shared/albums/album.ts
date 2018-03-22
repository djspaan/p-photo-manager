import { Photo } from '../photos/photo';

export class Album {
  public id: number;
  public name: string;
  public description: string;
  public photos: Photo[] = [];

  constructor(id: number, name: string, description: string, photos: Photo[] = []) {
    this.id = id;
    this.name = name;
    this.description = description;
    for (const photo of photos) {
      this.photos.push(new Photo(photo.id, photo.title, photo.description, photo.location, photo.createdAt));
    }
  }
}
