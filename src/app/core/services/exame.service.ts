import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exame } from '../../domain/exame';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

  exameForm: FormGroup | null = null;

  private apiUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }
  getForm(): FormGroup | null {
    return this.exameForm;
  }
  setForm(form: FormGroup) {
    this.exameForm = form;
  }


  salvar(exame: Exame): Observable<Exame> {
    return this.http.post<Exame>
      (this.apiUrl + "/exame", exame)

  }
  atualizar(exame: Exame): Observable<Exame> {
    return this.http.put<Exame>
      (this.apiUrl + "/exame/" + exame.id, exame)
  }
  getExame(exame: Exame): Observable<Exame> {
    return this.http.get<Exame>
      (this.apiUrl + "/exame" + exame)
  }

  getExames(): Observable<Exame[]> {
    return this.http.get<Exame[]>
      //("/exame")
      (this.apiUrl + "/exame")
  }

  getExameById(id: number): Observable<Exame> {
    return this.http.get<any>
      (this.apiUrl + "/exame/" + id);
  }
  deletar(exame: Exame): Observable<any> {
    return this.http.delete<any>
      (this.apiUrl + "/exame/" + exame.id);
  }
  getExames1(token: string): Observable<Exame> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<Exame>
      (this.apiUrl + "/exame", { headers });

  }

}
