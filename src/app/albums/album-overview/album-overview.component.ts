import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Album } from '../../shared/albums/album';
import { AlbumService } from '../../shared/albums/album.service';
import { Photo } from '../../shared/photos/photo';
import { PhotoService } from '../../shared/photos/photo.service';

@Component({
  selector: 'pm-overview',
  templateUrl: './album-overview.component.html',
  styleUrls: [ './album-overview.component.scss' ]
})
export class AlbumOverviewComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public albums: Album[] = [];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    // TODO: Refactor so only one subscription is needed.
    this.subscription = this.albumService.subject.subscribe((albums: Album[]) => {
      for (const album of albums) {
        this.albums.push(new Album(album.id, album.name, album.description, album.photos));
      }
    });
    this.albumService.all().subscribe((albums: Album[]) => {
      for (const album of albums) {
        this.albums.push(new Album(album.id, album.name, album.description, album.photos));
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
