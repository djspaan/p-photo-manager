import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Photo } from '../../shared/photos/photo';
import { PhotoService } from '../../shared/photos/photo.service';

@Component({
  selector: 'pm-overview',
  templateUrl: './photo-overview.component.html',
  styleUrls: [ './photo-overview.component.scss' ]
})
export class PhotoOverviewComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public photos: Photo[];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.subscription = this.photoService.photosChanged.subscribe((photos: Photo[]) => { this.photos = photos; });
    this.photoService.getPhotos().subscribe((photos: Photo[]) => this.photos = photos);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
