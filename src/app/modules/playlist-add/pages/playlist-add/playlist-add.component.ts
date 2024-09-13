import { Component, OnInit } from '@angular/core';
import { PlaylistAddService } from '../../service/playlist-add.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-playlist-add',
  templateUrl: './playlist-add.component.html',
  styleUrls: ['./playlist-add.component.scss']
})
export class PlaylistAddComponent {
  songs: any[] = [
    { id: 1, titulo: 'Bohemian Rhapsody', artista: 'Queen', album: 'A Night at the Opera', anno: '1975', genero: 'Rock' },
    { id: 2, titulo: 'In the End', artista: 'Linkin Park', album: 'Hybrid Theory', anno: '2001', genero: 'Nu Metal' },
    { id: 3, titulo: 'Clint Eastwood', artista: 'Gorillaz', album: 'Gorillaz', anno: '2001', genero: 'Alternative Rock' },
    { id: 4, titulo: 'Back in Black', artista: 'AC/DC', album: 'Back in Black', anno: '1980', genero: 'Hard Rock' },
    { id: 5, titulo: 'I Was Made for Lovin\' You', artista: 'Kiss', album: 'Dynasty', anno: '1979', genero: 'Hard Rock' },
    { id: 6, titulo: 'Enter Sandman', artista: 'Metallica', album: 'Metallica', anno: '1991', genero: 'Heavy Metal' },
    { id: 7, titulo: 'Sweet Child O\' Mine', artista: 'Guns N\' Roses', album: 'Appetite for Destruction', anno: '1987', genero: 'Hard Rock' },
    { id: 8, titulo: 'Smells Like Teen Spirit', artista: 'Nirvana', album: 'Nevermind', anno: '1991', genero: 'Grunge' },
    { id: 9, titulo: 'Highway to Hell', artista: 'AC/DC', album: 'Highway to Hell', anno: '1979', genero: 'Hard Rock' },
    { id: 10, titulo: 'Under Pressure', artista: 'Queen & David Bowie', album: 'Hot Space', anno: '1981', genero: 'Rock' }
  ];

  selectedSongs: any[] = []; // Array para las canciones seleccionadas
  selectedSong: any; // Para almacenar la canción seleccionada del ng-select

  playlistName: string = '';
  playlistDescription: string = '';

  constructor(private playlistAddService: PlaylistAddService) {}

  onSongSelect(songId: any): void {
    // Encuentra la canción seleccionada en la lista de canciones
    this.selectedSong = this.songs.find(song => song.id === songId.id);
  }

  agregarCancion(): void {
    if (this.selectedSong && !this.selectedSongs.find(song => song.id === this.selectedSong.id)) {
      this.selectedSongs.push(this.selectedSong);
    }
    console.log(this.selectedSongs);
  }

  guardarPlaylist(): void {
    if (!this.playlistName) {
      alert('El nombre de la lista es obligatorio.');
      return;
    }

    const playlist = {
      nombre: this.playlistName,
      descripcion: this.playlistDescription,
      canciones: this.selectedSongs
    };

    this.playlistAddService.guardarPlaylist(playlist).subscribe(response => {
      console.log('Playlist guardada con éxito', response);
      alert('Playlist guardada con éxito');
      // Opcional: Limpiar los campos y la lista de canciones seleccionadas
      this.selectedSongs = [];
      this.playlistName = '';
      this.playlistDescription = '';
    }, error => {
      console.error('Error al guardar la playlist', error);
      alert('Error al guardar la playlist');
    });
  }
}
