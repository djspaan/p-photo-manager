import { Photo } from './photo';

export class Album {
  public id: number;
  public name: string;
  public description: string;
  public photos: Photo[];

  constructor(id: number, name: string, description: string, photos: Photo[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.photos = photos;
  }
}
