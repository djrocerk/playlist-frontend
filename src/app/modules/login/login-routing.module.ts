import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlaylistListModule} from "../playlist-list/playlist-list.module";
import {PlaylistAddModule} from "../playlist-add/playlist-add.module";
import {LoginComponent} from "./page/login.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
