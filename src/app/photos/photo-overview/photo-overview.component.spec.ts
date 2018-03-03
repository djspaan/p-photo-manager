import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

import { AlbumService } from '../../shared/albums/album.service';
import { PhotoService } from '../../shared/photos/photo.service';

import { PhotoCardComponent } from '../photo-card/photo-card.component';
import { PhotoOverviewComponent } from './photo-overview.component';

describe('PhotoOverviewComponent', () => {
  let component: PhotoOverviewComponent;
  let fixture: ComponentFixture<PhotoOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoOverviewComponent, PhotoCardComponent ],
      providers: [ AlbumService, PhotoService, NgbModal, NgbModalStack ],
      imports: [ NgbModule, HttpClientTestingModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
