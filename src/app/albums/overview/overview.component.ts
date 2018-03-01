import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Album } from '../../shared/album';
import { AlbumService } from '../../shared/album.service';

@Component({
  selector: 'pm-overview',
  templateUrl: './overview.component.html',
  styleUrls: [ './overview.component.scss' ]
})
export class AlbumOverviewComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public albums: Album[];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.subscription = this.albumService.albumsChanged.subscribe((albums: Album[]) => { this.albums = albums; });
    this.albums = this.albumService.getAlbums();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
