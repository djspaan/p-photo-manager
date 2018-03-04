import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { Photo } from '../../shared/photos/photo';

import { PhotoCardComponent } from './photo-card.component';

describe('PhotoCardComponent', () => {
  let component: PhotoCardComponent;
  let fixture: ComponentFixture<PhotoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoCardComponent ],
      providers: [ NgbModal, NgbModalStack ],
      imports: [ NgbModule ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCardComponent);
    component = fixture.componentInstance;
    component.photo = new Photo(1, 'Title', 'Description', 'http://example.com');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('p.card-text')[ 0 ].textContent).toContain(component.photo.title);
  });

  it('should display the description', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('p.card-text')[ 1 ].textContent).toContain(component.photo.description);
  });

  it('should display the image', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img.card-img-top').src).toContain(component.photo.location);
  });

  it('should display the date created', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('small.text-muted').textContent).toContain(component.photo.getFormattedCreatedAt());
  });

  // TODO: Test to check if the edit modal opens.
});
