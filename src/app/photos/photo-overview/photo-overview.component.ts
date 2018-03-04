import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Album } from '../../shared/albums/album';

import { Photo } from '../../shared/photos/photo';
import { PhotoService } from '../../shared/photos/photo.service';

@Component({
  selector: 'pm-overview',
  templateUrl: './photo-overview.component.html',
  styleUrls: [ './photo-overview.component.scss' ]
})
export class PhotoOverviewComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public photos: Photo[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    // TODO: Refactor so only one subscription is needed.
    this.subscription = this.photoService.subject.subscribe((photos: Photo[]) => {
      for (const photo of photos) {
        this.photos.push(new Photo(photo.id, photo.title, photo.description, photo.location));
      }
    });
    this.photoService.all().subscribe((photos: Photo[]) => {
      for (const photo of photos) {
        this.photos.push(new Photo(photo.id, photo.title, photo.description, photo.location));
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
