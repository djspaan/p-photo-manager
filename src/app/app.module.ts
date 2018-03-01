import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlbumOverviewComponent } from './albums/overview/overview.component';
import { PhotoOverviewComponent } from './photos/overview/overview.component';
import { AlbumService } from './shared/album.service';
import { PhotoService } from './shared/photo.service';
import { SearchComponent } from './header/search/search.component';
import { CreatePhotoComponent } from './photos/create-photo/create-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AlbumOverviewComponent,
    PhotoOverviewComponent,
    SearchComponent,
    CreatePhotoComponent
  ],
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
  bootstrap: [AppComponent]
})
export class AppModule {
}
