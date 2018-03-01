import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { PhotoService } from '../../shared/photo.service';
import { EditPhotoComponent } from './edit-photo.component';

describe('EditPhotoComponent', () => {
  let component: EditPhotoComponent;
  let fixture: ComponentFixture<EditPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPhotoComponent ],
      imports: [ FormsModule, ReactiveFormsModule ],
      providers: [ NgbActiveModal, PhotoService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
