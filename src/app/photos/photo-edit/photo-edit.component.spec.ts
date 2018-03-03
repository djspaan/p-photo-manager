import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { PhotoService } from '../../shared/photos/photo.service';

import { PhotoEditComponent } from './photo-edit.component';

describe('PhotoEditComponent', () => {
  let component: PhotoEditComponent;
  let fixture: ComponentFixture<PhotoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoEditComponent ],
      imports: [ FormsModule, ReactiveFormsModule, HttpClientTestingModule ],
      providers: [ NgbActiveModal, PhotoService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
