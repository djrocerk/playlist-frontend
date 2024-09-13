import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import {FormsModule} from "@angular/forms";
import {PlaylistDetailComponent} from "./page/playlist-detail.component";
import {PlaylistDetailRoutingModule} from "./playlist-detail-routing.module";


@NgModule({
  declarations: [
    PlaylistDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    PlaylistDetailRoutingModule
  ]
})
export class PlaylistDetailModule { }
