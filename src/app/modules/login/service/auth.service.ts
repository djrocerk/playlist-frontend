import { Injectable } from '@angular/core';
import {of, Observable, throwError} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoginRequest, LoginResponse } from '../../../core/models/loginRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/login'; // URL del backend

  // Datos de usuario simulado
  private mockUser = {
    username: 'admin',
    password: 'admin'
  };

  login(credentials: LoginRequest): Observable<LoginResponse> {
    if (
      credentials.username === this.mockUser.username &&
      credentials.password === this.mockUser.password
    ) {
      const fakeToken = 'mocked-jwt-token';
      return of({ token: fakeToken }).pipe(
        tap(response => {
          // Guardar el token en localStorage
          localStorage.setItem('authToken', response.token);
        }),
        catchError(error => {
          console.error('Error en el login', error);
          return throwError(() => error);
        })
      );
    } else {
      return throwError(() => new Error('Credenciales inválidas')).pipe(
        catchError(error => {
          console.error('Error en el login', error);
          return throwError(() => error);
        })
      );
    }
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('authToken');
  }
}
