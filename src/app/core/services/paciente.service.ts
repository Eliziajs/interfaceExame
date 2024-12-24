import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../../domain/Paciente';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  exameForm: FormGroup| null = null

  private apiUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }
  getForm(): FormGroup | null {

    return this.exameForm;
  }
  setForm(form: FormGroup) {
    this.exameForm = form;
  }

  salvar(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>
      (this.apiUrl + "/paciente", paciente)

  }
  atualizar(paciente: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>
      (this.apiUrl + "/paciente/" + paciente.id, paciente)
  }
  getPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.get<Paciente>
      (this.apiUrl + "/paciente" + paciente)
  }

  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>
      //("/paciente")
      (this.apiUrl + "/paciente" );
      
  }
  getPacienteByCPF(CPF:string):Observable<Paciente>{
    return this.http.get<any>
   // (this.apiUrl + "/paciente/" + CPF)
    ("/paciente/" + CPF)
  }

  getPacienteById(id: number): Observable<Paciente> {
    return this.http.get<any>
      (this.apiUrl + "/paciente/" + id);
  }
  deletar(paciente: Paciente): Observable<any> {
    return this.http.delete<any>
      (this.apiUrl + "/paciente/" + paciente.id);
  }
  getExames1(token: string): Observable<Paciente> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<Paciente>
      (this.apiUrl + "/paciente", { headers });

  }
  getPdf(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>
      (this.apiUrl + "/report")
  }
  getPdfId(id: number): Observable<Paciente> {
    return this.http.get<any>
      (this.apiUrl + "/report/" + id);
  }



}


