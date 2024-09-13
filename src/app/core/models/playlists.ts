import {Song} from "./songs";

export interface Playlist {
  nombre: string;
  descripcion: string;
  canciones: Song[];
}
