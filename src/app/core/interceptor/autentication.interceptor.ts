import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { inject } from '@angular/core';
import {
 
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';


/*export function autenticationInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
 // if(!inject(TokenService).possuiToken()){
   // null;}
   // const authToken = inject(TokenService).retornarToken();
  const authToken = inject(TokenService).retornarToken();

  const newReq = req.clone({
 
    setHeaders: {
      'Authorization':`Bearer ${authToken}`
  }
  
  });
  return next(newReq);
}*/

export const autenticationInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next:HttpHandlerFn) => {
  

  if(!inject(TokenService).possuiToken()){
    null;}
    const token = inject(TokenService).retornarToken();

    const newReq = req.clone({
      setHeaders: {
        'Authorization':`Bearer ${token}`
    }
      
    });

  return next(newReq);

};