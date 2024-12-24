import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../../domain/Paciente';

@Injectable({
  providedIn: 'root'
})
export class PdfService {


 private apiUrl: string = "http://localhost:8080"
 
  constructor(
    http: HttpClient
  ) { }
  

    
  
}
