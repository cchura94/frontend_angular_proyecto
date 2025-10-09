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

  funMostrar(id: string){
    return this.http.get(`${this.urlBase}/categoria/${id}`);
  }

  funModificar(id: string='-', datos: any){
    return this.http.patch(`${this.urlBase}/categoria/${id}`, datos);
  }

  funEliminar(id: string){
    return this.http.delete(`${this.urlBase}/categoria/${id}`);
  }
}
