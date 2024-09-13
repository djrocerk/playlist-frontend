import { Component, OnInit } from '@angular/core';
import { PlaylistListService } from '../../service/Playlist-list.service';
import { Playlist } from '../../../../core/models/playlists';
import {Router} from "@angular/router";
import {playlistsData} from "../../../../core/models/playlistsDataPrueba";

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

  playlists: Playlist[] = [];

  constructor(private playlistService: PlaylistListService, private router: Router) {}

  goToDetails(playlistNombre: string) {
    this.router.navigate(['/playlist-details', playlistNombre]);
  }

  ngOnInit(): void {
    this.loadPlaylists();
  }

  loadPlaylists(): void {
    this.playlistService.getPlaylists().subscribe(
      (data: Playlist[]) => {
        console.log('Datos del servicio:', data);
        if (data && data.length > 0) {
          this.playlists = data; // Usa los datos del servicio
        } else {
          console.log('No se encontraron datos en el servicio, usando datos de prueba.');
          this.playlists = playlistsData; // Usa los datos de prueba si no hay datos
        }
      },
      (error) => {
        console.error('Error loading playlists', error);
        this.playlists = playlistsData; // Usa datos de prueba en caso de error
      }
    );
    console.log(this.playlists);
  }
}
