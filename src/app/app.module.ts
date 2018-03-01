import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AlbumOverviewComponent,
    PhotoOverviewComponent,
    SearchComponent,
    PhotoEditComponent
  ],
  entryComponents: [ PhotoEditComponent ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
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
