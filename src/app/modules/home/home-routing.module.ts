import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlaylistListModule} from "../playlist-list/playlist-list.module";
import {PlaylistAddModule} from "../playlist-add/playlist-add.module";

const routes: Routes = [
  {
    path: 'playlist-list',
    loadChildren: () => import('../playlist-list/playlist-list.module').then(m => m.PlaylistListModule)
  },
  {
    path: 'playlist-add',
    loadChildren: () => import('../playlist-add/playlist-add.module').then(m => m.PlaylistAddModule)
  },
  {
    path: '**',
    redirectTo: 'playlist-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
