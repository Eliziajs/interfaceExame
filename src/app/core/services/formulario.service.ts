import { Injectable } from '@angular/core';
import {  FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  formulario: FormGroup | null = null;


  getCadastro(): FormGroup | null{
    return this.formulario;
  }

  setCadastro(form: FormGroup){
    this.formulario=form;
  }

}
