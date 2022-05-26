import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'locations', loadChildren: () => import('./components/locations/locations.module').then(m => m.LocationsModule) },
  { path: 'episodes', loadChildren: () => import('./components/episodes/episodes.module').then(m => m.EpisodesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
