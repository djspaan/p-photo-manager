// TODO: Implement this interface
export interface Picture {
  id: number;
  title: string;
  description: string;
  location: string;
  createdAt?: Date;
}

export class Photo implements Picture {
  public id: number;
  public title: string;
  public description: string;
  public location: string;
  public createdAt: Date;

  constructor(id: number, title: string, description: string, location: string, createdAt: Date = null) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.location = location;
    this.createdAt = new Date();
  }

  getFormattedCreatedAt(): string {
    return this.createdAt.toDateString();
  }
}
