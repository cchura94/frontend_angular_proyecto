import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlBase = environment.urlBackendApi;
  http = inject(HttpClient)
  
  funConectarConBackendExterno(credenciales: any){
    return this.http.post(`${this.urlBase}/auth/login`, credenciales)
  }
}
