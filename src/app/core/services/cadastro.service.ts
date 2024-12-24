import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../domain/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl:string = "http://localhost:8080";
 
  constructor(
    private http: HttpClient,
    
  ) { }
  
  salvar(user:User): Observable<User>{
    return this.http.post<User>
    (this.apiUrl + "/auth/register",user)
  }
  getCadastro(): Observable<User>{
    return this.http.get<User>
    (this.apiUrl + "/auth/user");

  }

  getExameById(id: number): Observable <User>{ 
    return this.http.get<any>
    (this.apiUrl + "/auth/user/" + id, );  
}
  editarCadastro(user: User, id: number): Observable<User>{
    return this.http.put<User>
    (this.apiUrl + "/auth/user/" + id, user);
  }
  /**editarCadastro(user: User, token: string, id: number): Observable<User>{
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${token}`
    })
    return this.http.put<User>
    (this.apiUrl + "/auth/user/" + id, user, { headers });
  }*/

}
