import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { PhotoEditComponent } from './photos/photo-edit/photo-edit.component';
import { AlbumService } from './shared/albums/album.service';
import { PhotoService } from './shared/photos/photo.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, NgbModule.forRoot() ],
      declarations: [ AppComponent, HeaderComponent, SearchComponent ],
      providers: [ AlbumService, PhotoService, NgbModal, NgbModalStack ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
