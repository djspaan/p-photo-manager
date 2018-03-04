import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AlbumService } from '../albums/album.service';

import { PhotoService } from './photo.service';

describe('PhotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AlbumService, PhotoService ],
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should be created', inject([ PhotoService ], (service: PhotoService) => {
    expect(service).toBeTruthy();
  }));

  it('#all should do a request and return an observable',
    inject([ HttpTestingController, PhotoService ],
      (http: HttpTestingController, service: PhotoService) => {
        service.all();
        verifyRequest(http, 'api/photos');
        verifyRequest(http, 'api/albums');
        http.verify();
      })
  );

  function verifyRequest(http: HttpTestingController, url: string): void {
    const request = http.expectOne(url);
    expect(request.cancelled).toBeFalsy();
    expect(request.request.responseType).toEqual('json');
  }
});
