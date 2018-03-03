import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

import { PhotoCardComponent } from '../../photos/photo-card/photo-card.component';

import { AlbumService } from '../../shared/albums/album.service';
import { PhotoService } from '../../shared/photos/photo.service';

import { AlbumOverviewComponent } from './album-overview.component';

describe('AlbumOverviewComponent', () => {
  let component: AlbumOverviewComponent;
  let fixture: ComponentFixture<AlbumOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumOverviewComponent, PhotoCardComponent ],
      providers: [ AlbumService, PhotoService, NgbModal, NgbModalStack ],
      imports: [ NgbModule, HttpClientTestingModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
