import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AlbumService } from './album.service';
import { PhotoService } from '../photos/photo.service';

describe('AlbumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AlbumService, PhotoService ],
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should be created', inject([ AlbumService ], (service: AlbumService) => {
    expect(service).toBeTruthy();
  }));
});
