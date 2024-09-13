import {Component, Input} from '@angular/core';
import {Song} from "../../../core/models/songs";

@Component({
  selector: 'app-card-songs',
  templateUrl: './card-songs.component.html',
  styleUrls: ['./card-songs.component.scss']
})
export class CardSongsComponent {

  @Input() song!: Song;

}
