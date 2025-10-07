import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  urlBase = environment.urlBackendApi;
  http = inject(HttpClient);

  funListar(){
    console.log("HTTP SERVICE")
    return this.http.get(`${this.urlBase}/users`);
  }

  funGuardar(datos: any){
    return this.http.post(`${this.urlBase}/users`, datos);
  }

  funMostrar(id: string){
    return this.http.get(`${this.urlBase}/users/${id}`);
  }

  funModificar(id: string='-', datos: any){
    return this.http.patch(`${this.urlBase}/users/${id}`, datos);
  }

  funEliminar(id: string){
    return this.http.delete(`${this.urlBase}/users/${id}`);
  }
}
