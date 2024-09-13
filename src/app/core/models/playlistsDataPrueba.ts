import {Playlist} from "./playlists";

export const playlistsData: Playlist[] = [
  {
    nombre: 'Rock Classics',
    descripcion: 'Una selección de los mejores clásicos del rock.',
    canciones: [
      {
        titulo: 'Bohemian Rhapsody',
        artista: 'Queen',
        album: 'A Night at the Opera',
        anno: '1975',
        genero: 'Rock'
      },
      {
        titulo: 'Stairway to Heaven',
        artista: 'Led Zeppelin',
        album: 'Led Zeppelin IV',
        anno: '1971',
        genero: 'Rock'
      }
    ]
  },
  {
    nombre: 'Pop Hits',
    descripcion: 'Los éxitos más populares del pop.',
    canciones: [
      {
        titulo: 'Blinding Lights',
        artista: 'The Weeknd',
        album: 'After Hours',
        anno: '2020',
        genero: 'Pop'
      },
      {
        titulo: 'Levitating',
        artista: 'Dua Lipa',
        album: 'Future Nostalgia',
        anno: '2020',
        genero: 'Pop'
      }
    ]
  },
  {
    nombre: 'Metal Madness',
    descripcion: 'Los mejores temas de metal para una dosis de energía.',
    canciones: [
      {
        titulo: 'Enter Sandman',
        artista: 'Metallica',
        album: 'Metallica',
        anno: '1991',
        genero: 'Heavy Metal'
      },
      {
        titulo: 'Sweet Child O\' Mine',
        artista: 'Guns N\' Roses',
        album: 'Appetite for Destruction',
        anno: '1987',
        genero: 'Hard Rock'
      }
    ]
  },
  {
    nombre: 'Hard Rock Essentials',
    descripcion: 'Un must para los fanáticos del hard rock.',
    canciones: [
      {
        titulo: 'Back in Black',
        artista: 'AC/DC',
        album: 'Back in Black',
        anno: '1980',
        genero: 'Hard Rock'
      },
      {
        titulo: 'I Was Made for Lovin\' You',
        artista: 'Kiss',
        album: 'Dynasty',
        anno: '1979',
        genero: 'Hard Rock'
      }
    ]
  },
  {
    nombre: 'Grunge Revival',
    descripcion: 'Revive los mejores momentos del grunge.',
    canciones: [
      {
        titulo: 'Smells Like Teen Spirit',
        artista: 'Nirvana',
        album: 'Nevermind',
        anno: '1991',
        genero: 'Grunge'
      },
      {
        titulo: 'Highway to Hell',
        artista: 'AC/DC',
        album: 'Highway to Hell',
        anno: '1979',
        genero: 'Hard Rock'
      }
    ]
  }
];
