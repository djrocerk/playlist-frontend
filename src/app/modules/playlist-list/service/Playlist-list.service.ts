import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Playlist} from "../../../core/models/playlists";

@Injectable({
  providedIn: 'root'
})
export class PlaylistListService {
  private apiUrl = 'http://localhost:8080/lists';

  constructor(private http: HttpClient) {}

  getPlaylists(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.apiUrl);
  }

  deletePlaylist(name: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${name}`);
  }
}
