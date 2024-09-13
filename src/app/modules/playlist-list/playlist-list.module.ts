import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistListRoutingModule } from './playlist-list-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import {FormsModule} from "@angular/forms";
import {PlaylistsComponent} from "./pages/playlists/playlists.component";


@NgModule({
  declarations: [
    PlaylistsComponent
  ],
  imports: [
    CommonModule,
    PlaylistListRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ]
})
export class PlaylistListModule { }
