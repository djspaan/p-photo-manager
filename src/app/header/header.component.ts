import { Component, OnInit } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { AlbumEditComponent } from '../albums/album-edit/album-edit.component';
import { PhotoEditComponent } from '../photos/photo-edit/photo-edit.component';

@Component({
  selector: 'pm-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  private modal: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit() { }

  public openCreateAlbumModal() {
    this.modal = this.modalService.open(AlbumEditComponent);
  }

  public openCreatePhotoModal() {
    this.modal = this.modalService.open(PhotoEditComponent);
  }

}
