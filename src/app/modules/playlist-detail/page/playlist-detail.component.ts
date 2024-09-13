import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlaylistDetailService} from "../service/Playlist-detail.service";
import {Song} from "../../../core/models/songs";
import {PlaylistListService} from "../../playlist-list/service/Playlist-list.service";
import {playlistsData} from "../../../core/models/playlistsDataPrueba";

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss']
})
export class PlaylistDetailComponent implements OnInit{
  playlistName: string = '';
  selectedSongs: Song[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playlistService: PlaylistDetailService,
    private playlistListService: PlaylistListService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.playlistName = params.get('nombre') || '';
      this.loadSongs();
    });
  }

  loadSongs(): void {
    if (this.playlistName) {
      this.playlistService.getSongsByPlaylistName(this.playlistName).subscribe(
        (songs: Song[]) => {
          if (songs.length > 0) {
            this.selectedSongs = songs;
          } else {
            this.selectedSongs = this.getSimulatedSongs(this.playlistName);
          }
        },
        error => {
          console.error('Error al cargar canciones:', error);
          // Cargar datos simulados en caso de error
          this.selectedSongs = this.getSimulatedSongs(this.playlistName);
        }
      );
    }
  }

  getSimulatedSongs(playlistName: string): Song[] {
    const playlist = playlistsData.find(p => p.nombre === playlistName);
    return playlist ? playlist.canciones : [];
  }

  eliminarPlaylist(): void {
    if (this.playlistName) {
      this.playlistListService.deletePlaylist(this.playlistName).subscribe(
        () => {
          console.log('Playlist eliminada con éxito');
          this.router.navigate(['/']);
        },
        error => console.error('Error al eliminar playlist:', error)
      );
    }
  }
}
