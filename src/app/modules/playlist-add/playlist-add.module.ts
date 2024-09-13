import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import {FormsModule} from "@angular/forms";
import {PlaylistAddComponent} from "./pages/playlist-add/playlist-add.component";
import {PlaylistAddRoutingModule} from "./playlist-add-routing.module";
import { NgSelectModule} from "@ng-select/ng-select";


@NgModule({
  declarations: [
    PlaylistAddComponent
  ],
  imports: [
    CommonModule,
    PlaylistAddRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    NgSelectModule
  ]
})
export class PlaylistAddModule { }
