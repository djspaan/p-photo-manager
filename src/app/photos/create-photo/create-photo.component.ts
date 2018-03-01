import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { PhotoService } from '../../shared/photo.service';

@Component({
  selector: 'pm-create-photo',
  templateUrl: './create-photo.component.html',
  styleUrls: ['./create-photo.component.scss']
})
export class CreatePhotoComponent implements OnInit {
  public form: FormGroup;
  private modal: NgbModalRef;

  constructor(private modalService: NgbModal, private photoService: PhotoService) { }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    const title = '';
    const description = '';
    const location = '';
    this.form = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'description': new FormControl(description, Validators.required),
      'location': new FormControl(location, Validators.required)
    });
  }

  public openModal(content) {
    this.form.reset();
    this.modal = this.modalService.open(content);
  }

  /**
   * On submit add the created photo to the service.
   */
  public submitForm() {
    this.photoService.add(this.form.value);
    this.modal.dismiss();
  }


}
