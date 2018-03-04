// TODO: Implement this interface application wide
export interface Picture {
  id: number;
  title: string;
  description: string;
  location: string;
  createdAt?: Date;

  getFormattedCreatedAt(): string;
}

export class Photo implements Picture {
  public id: number;
  public title: string;
  public description: string;
  public location: string;
  public createdAt: Date = new Date();

  constructor(id: number = 0, title = '', description: string = '', location: string = '', createdAt: Date = null) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.location = location;
    this.createdAt = createdAt || this.createdAt;
  }

  public getFormattedCreatedAt(): string {
    return this.createdAt.toDateString();
  }
}
