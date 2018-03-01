import { TestBed, inject } from '@angular/core/testing';

import { AlbumService } from './album.service';
import { PhotoService } from './photo.service';

describe('AlbumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumService, PhotoService]
    });
  });

  it('should be created', inject([AlbumService], (service: AlbumService) => {
    expect(service).toBeTruthy();
  }));
});
