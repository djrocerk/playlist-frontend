import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlaylistAddService {

  private apiUrl = 'http://localhost:8080/lists';

  constructor(private http: HttpClient) {}

  // Método para guardar la playlist
  guardarPlaylist(playlist: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.apiUrl, playlist, { headers });
  }

}
