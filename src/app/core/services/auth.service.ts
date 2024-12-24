import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../../domain/User';
import { UserService } from './user.service';

interface AuthResponse {
  token: string,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl: string = "http://localhost:8080";

  constructor(
    private http: HttpClient,
    private userService : UserService

  ) { }

  autenticar(email: string, password: string):
    Observable<HttpResponse<AuthResponse>> {
    return this.http.post<AuthResponse>(`api/auth/login`,
      { email, password },
      { observe: 'response' }).pipe(
        tap((response) => {
          const authtoken = response.body?.token || '';
          this.userService.salvarToken(authtoken);
          

        })
      );
  }

}
