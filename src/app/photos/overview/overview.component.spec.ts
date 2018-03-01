import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoService } from '../../shared/photo.service';

import { PhotoOverviewComponent } from './overview.component';

describe('PhotoOverviewComponent', () => {
  let component: PhotoOverviewComponent;
  let fixture: ComponentFixture<PhotoOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoOverviewComponent],
      providers: [PhotoService]
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
