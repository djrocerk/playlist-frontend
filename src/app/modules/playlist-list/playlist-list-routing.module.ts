import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlaylistsComponent} from "./pages/playlists/playlists.component";

const routes: Routes = [
  {
    path: '',
    component: PlaylistsComponent
  },
  {
    path: 'playlist-details/:nombre',
    loadChildren: () => import('../playlist-detail/playlist-detail.module').then(m => m.PlaylistDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistListRoutingModule { }
