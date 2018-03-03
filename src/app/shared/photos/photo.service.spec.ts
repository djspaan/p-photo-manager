import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PhotoService } from './photo.service';

describe('PhotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ PhotoService ],
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should be created', inject([ PhotoService ], (service: PhotoService) => {
    expect(service).toBeTruthy();
  }));
});
