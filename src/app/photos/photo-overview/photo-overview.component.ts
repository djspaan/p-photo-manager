import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { Photo } from '../../shared/photos/photo';
import { PhotoService } from '../../shared/photos/photo.service';
import { PhotoEditComponent } from '../photo-edit/photo-edit.component';

@Component({
  selector: 'pm-overview',
  templateUrl: './photo-overview.component.html',
  styleUrls: [ './photo-overview.component.scss' ]
})
export class PhotoOverviewComponent implements OnInit {
  private subscription: Subscription;
  public photos: Photo[];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.subscription = this.photoService.photosChanged.subscribe((photos: Photo[]) => { this.photos = photos; });
    this.photos = this.photoService.getPhotos();
  }


}
