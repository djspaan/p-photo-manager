import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumService } from '../../shared/album.service';
import { PhotoService } from '../../shared/photo.service';

import { AlbumOverviewComponent } from './overview.component';

describe('AlbumOverviewComponent', () => {
  let component: AlbumOverviewComponent;
  let fixture: ComponentFixture<AlbumOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumOverviewComponent ],
      providers: [AlbumService, PhotoService]
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
