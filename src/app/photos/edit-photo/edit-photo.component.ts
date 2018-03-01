import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Photo } from '../../shared/photo';
import { PhotoService } from '../../shared/photo.service';

@Component({
  selector: 'pm-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: [ './edit-photo.component.scss' ]
})
export class EditPhotoComponent implements OnInit {
  public editPhotoForm: FormGroup;
  public photo: Photo;

  constructor(public activeModal: NgbActiveModal, private photoService: PhotoService) { }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    const title = this.photo ? this.photo.title : '';
    const description = this.photo ? this.photo.description : '';
    const location = this.photo ? this.photo.location : '';
    this.editPhotoForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'description': new FormControl(description, Validators.required),
      'location': new FormControl(location, Validators.required)
    });
  }

  public setPhoto(photo: Photo) {
    this.photo = photo;
    this.initForm();
  }

  /**
   * On submit add the created photo to the service.
   */
  public submitForm() {
    if (this.photo) {
      this.photoService.update(this.photo.id, this.editPhotoForm.value);
    } else {
      this.photoService.add(this.editPhotoForm.value);
    }
    this.activeModal.dismiss();
  }
}
