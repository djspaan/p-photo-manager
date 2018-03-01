import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { Photo } from '../../shared/photo';
import { PhotoService } from '../../shared/photo.service';
import { EditPhotoComponent } from '../edit-photo/edit-photo.component';

@Component({
  selector: 'pm-overview',
  templateUrl: './overview.component.html',
  styleUrls: [ './overview.component.scss' ]
})
export class PhotoOverviewComponent implements OnInit {
  private modal: NgbModalRef;
  private subscription: Subscription;
  public photos: Photo[];

  constructor(private modalService: NgbModal, private photoService: PhotoService) { }

  ngOnInit() {
    this.subscription = this.photoService.photosChanged.subscribe((photos: Photo[]) => { this.photos = photos; });
    this.photos = this.photoService.getPhotos();
  }

  public openEditPhotoModal(photo: Photo) {
    this.modal = this.modalService.open(EditPhotoComponent);
    this.modal.componentInstance.setPhoto(photo);
  }

}
