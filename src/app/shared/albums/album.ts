import { Photo } from '../photos/photo';

export class Album {
  public id: number;
  public name: string;
  public description: string;
  public photos: number[];

  constructor(id: number, name: string, description: string, photos: number[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.photos = photos;
  }

  // // TODO
  // public getPhotos(): Photo[] {
  //   return this.photoService.getByIds(this.photos);
  // }
}
