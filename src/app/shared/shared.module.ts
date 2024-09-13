import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardSongsComponent } from './components/card-songs/card-songs.component';
import { PlaylistCardsComponent } from "./components/card-playlist/playlist-cards.component";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {ImgBrokenDirective} from "./directives/img-broken.directive";
import { SidenavComponent } from "./components/sidenav/sidenav.component";

@NgModule({
  declarations: [
    CardSongsComponent,
    PlaylistCardsComponent,
    ImgBrokenDirective,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
  ],
  exports: [
    CardSongsComponent,
    PlaylistCardsComponent,
    SidenavComponent,
  ]
})
export class SharedModule { }

