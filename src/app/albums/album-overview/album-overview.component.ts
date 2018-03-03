import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Album } from '../../shared/albums/album';
import { AlbumService } from '../../shared/albums/album.service';
import { PhotoService } from '../../shared/photos/photo.service';

@Component({
  selector: 'pm-overview',
  templateUrl: './album-overview.component.html',
  styleUrls: [ './album-overview.component.scss' ]
})
export class AlbumOverviewComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public albums: Album[];

  constructor(private albumService: AlbumService, public photoService: PhotoService) { }

  ngOnInit(): void {
    this.subscription = this.albumService.albumsChanged.subscribe((albums: Album[]) => this.albums = albums);
    this.albumService.getAlbums().subscribe((albums: Album[]) => this.albums = albums);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
