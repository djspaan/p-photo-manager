import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlbumOverviewComponent } from './albums/album-overview/album-overview.component';
import { PhotoOverviewComponent } from './photos/photo-overview/photo-overview.component';
import { AlbumService } from './shared/albums/album.service';
import { PhotoService } from './shared/photos/photo.service';
import { SearchComponent } from './header/search/search.component';
import { PhotoEditComponent } from './photos/photo-edit/photo-edit.component';
import { PhotoCardComponent } from './photos/photo-card/photo-card.component';
import { AlbumEditComponent } from './albums/album-edit/album-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AlbumOverviewComponent,
    PhotoOverviewComponent,
    SearchComponent,
    PhotoEditComponent,
    PhotoCardComponent,
    AlbumEditComponent
  ],
  entryComponents: [ AlbumEditComponent, PhotoEditComponent ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    ReactiveFormsModule
  ],
  providers: [
    AlbumService,
    PhotoService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
