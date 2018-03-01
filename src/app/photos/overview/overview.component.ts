import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AlbumService } from '../../shared/album.service';
import { Photo } from '../../shared/photo';
import { PhotoService } from '../../shared/photo.service';

@Component({
  selector: 'pm-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class PhotoOverviewComponent implements OnInit {
  private subscription: Subscription;
  public photos: Photo[];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.subscription = this.photoService.photosChanged.subscribe((photos: Photo[]) => { this.photos = photos; });
    this.photos = this.photoService.getPhotos();
  }

}
