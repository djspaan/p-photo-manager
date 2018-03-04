import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { AlbumService } from './album.service';

describe('AlbumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ AlbumService ]
    });
  });

  it('should be created', inject([ AlbumService ], (service: AlbumService) => {
    expect(service).toBeTruthy();
  }));

  it('#all should do a request and return an observable',
    inject([ HttpTestingController, AlbumService ],
      (http: HttpTestingController, service: AlbumService) => {
        service.all();
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
