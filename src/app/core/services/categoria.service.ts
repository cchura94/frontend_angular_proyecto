import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  urlBase = environment.urlBackendApi;
  http = inject(HttpClient);

  funListar(){
    return this.http.get(`${this.urlBase}/categoria`);
  }

  funGuardar(datos: any){
    return this.http.post(`${this.urlBase}/categoria`, datos);
  }

  funMostrar(id: number){
    return this.http.get(`${this.urlBase}/categoria/${id}`);
  }

  funModificar(id: number, datos: any){
    return this.http.patch(`${this.urlBase}/categoria/${id}`, datos);
  }

  funEliminar(id: number){
    return this.http.delete(`${this.urlBase}/categoria/${id}`);
  }
}
