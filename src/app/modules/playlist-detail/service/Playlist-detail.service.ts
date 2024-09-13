import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Song} from "../../../core/models/songs";

@Injectable({
  providedIn: 'root'
})
export class PlaylistDetailService {
  private apiUrl = 'http://localhost:8080/lists';

  constructor(private http: HttpClient) {}

  getSongsByPlaylistName(playlistName: string): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.apiUrl}/${playlistName}/songs`);
  }
}
