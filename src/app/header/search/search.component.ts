import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService } from '../../shared/album.service';
import { PhotoService } from '../../shared/photo.service';

@Component({
  selector: 'pm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('searchInput') private searchInput: ElementRef;

  constructor(private albumService: AlbumService, private photoService: PhotoService, private router: Router) { }

  ngOnInit() { }

  onSearch() {
    const query = this.searchInput.nativeElement.value;

    switch (this.router.url) {
      case '/albums/overview':
        this.albumService.search(query); break;
      case '/photos/overview':
        this.photoService.search(query); break;
      default:
        return;
    }
  }
}
