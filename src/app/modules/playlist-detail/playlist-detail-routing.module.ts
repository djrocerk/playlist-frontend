import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistDetailComponent } from './page/playlist-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PlaylistDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistDetailRoutingModule { }
