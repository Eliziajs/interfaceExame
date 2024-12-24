import { Injectable } from '@angular/core';

const KEY = 'token';
const ID = 'id';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
 
  salvarToken(token: string) {
    return localStorage.setItem(KEY, token)
  }

  excluirToken() {
    localStorage.removeItem(KEY)
  }

  retornarToken() {
    return localStorage.getItem(KEY) ?? ''

  }
  retornarId() {
    
    return localStorage.getItem(ID) ?? ''

  }
  retornarName() {
    
    return localStorage.getItem('name') ?? ''

  }
  possuiToken() {
   return !!this.retornarToken();
  }


}