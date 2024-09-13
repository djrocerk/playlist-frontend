import {Component, Input, OnInit} from "@angular/core";
import {Playlist} from "../../../core/models/playlists";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-playlist',
  templateUrl: './card-playlist.component.html',
  styleUrls: ['./card-playlist.component.scss']
})
export class PlaylistCardsComponent implements OnInit {
  @Input() playlists: Playlist[] = [];

  constructor(private router: Router) {
  }

  goToDetails(playlistNombre: string) {
    this.router.navigate(['/playlist-details', playlistNombre]);
  }

  ngOnInit(): void {
    console.log(this.playlists);
  }
}

