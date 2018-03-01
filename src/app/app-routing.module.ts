import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlbumOverviewComponent } from './albums/album-overview/album-overview.component';
import { PhotoOverviewComponent } from './photos/photo-overview/photo-overview.component';

// TODO: split these into the different modules
const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'albums', redirectTo: 'albums/overview', pathMatch: 'full'},
  {path: 'albums/overview', component: AlbumOverviewComponent},
  {path: 'photos', redirectTo: 'photos/overview', pathMatch: 'full'},
  {path: 'photos/overview', component: PhotoOverviewComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
