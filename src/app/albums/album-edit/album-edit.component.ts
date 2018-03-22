import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Album } from '../../shared/albums/album';
import { AlbumService } from '../../shared/albums/album.service';

@Component({
  selector: 'pm-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.scss']
})
export class AlbumEditComponent implements OnInit {
  public form: FormGroup;
  public album: Album;

  constructor(public activeModal: NgbActiveModal, private albumService: AlbumService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    const name = this.album ? this.album.name : '';
    const description = this.album ? this.album.description : '';
    this.form = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'description': new FormControl(description, Validators.required),
    });
  }

  public submitForm() {
    if (this.album) {
      // this.form.value.id = this.album.id;
      // this.albumService.update(this.form.value);
    } else {
      this.albumService.create(this.form.value);
    }
    this.activeModal.dismiss();
  }

}
