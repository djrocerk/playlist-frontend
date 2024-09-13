import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlaylistAddComponent} from "./pages/playlist-add/playlist-add.component";

const routes: Routes = [
  {
    path: '',
    component: PlaylistAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistAddRoutingModule { }
