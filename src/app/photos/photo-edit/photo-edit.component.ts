import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Photo } from '../../shared/photos/photo';
import { PhotoService } from '../../shared/photos/photo.service';

@Component({
  selector: 'pm-edit-photo',
  templateUrl: './photo-edit.component.html',
  styleUrls: [ './photo-edit.component.scss' ]
})
export class PhotoEditComponent implements OnInit {
  public form: FormGroup;
  public photo: Photo;

  constructor(public activeModal: NgbActiveModal, private photoService: PhotoService) { }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    const title = this.photo ? this.photo.title : '';
    const description = this.photo ? this.photo.description : '';
    const location = this.photo ? this.photo.location : '';
    this.form = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'description': new FormControl(description, Validators.required),
      'location': new FormControl(location, Validators.required)
    });
  }

  public setPhoto(photo: Photo) {
    this.photo = photo;
    this.initForm();
  }

  public submitForm() {
    if (this.photo) {
      this.form.value.id = this.photo.id;
      this.photoService.update(this.form.value);
    } else {
      this.photoService.create(this.form.value);
    }
    this.activeModal.dismiss();
  }
}
