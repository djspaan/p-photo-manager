import { Component, Input } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { Photo } from '../../shared/photos/photo';
import { PhotoEditComponent } from '../photo-edit/photo-edit.component';

@Component({
  selector: 'pm-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: [ './photo-card.component.scss' ]
})
export class PhotoCardComponent {
  @Input() public photo: Photo = new Photo();
  private modal: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  public openEditPhotoModal(photo: Photo) {
    this.modal = this.modalService.open(PhotoEditComponent);
    this.modal.componentInstance.setPhoto(photo);
  }

}
