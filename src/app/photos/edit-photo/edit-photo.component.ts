import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { PhotoService } from '../../shared/photo.service';

@Component({
  selector: 'pm-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: [ './edit-photo.component.scss' ]
})
export class EditPhotoComponent implements OnInit {
  public editPhotoForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private photoService: PhotoService) { }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    const title = '';
    const description = '';
    const location = '';
    this.editPhotoForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'description': new FormControl(description, Validators.required),
      'location': new FormControl(location, Validators.required)
    });
  }

  /**
   * On submit add the created photo to the service.
   */
  public submitForm() {
    this.photoService.add(this.editPhotoForm.value);
    this.activeModal.dismiss();
  }
}
