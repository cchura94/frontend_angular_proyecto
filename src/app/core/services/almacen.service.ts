import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {
  urlBase = environment.urlBackendApi;
  http = inject(HttpClient);

  funListar(): Observable<any>{
    return this.http.get<any>(`${this.urlBase}/almacen`);
  }

  funGuardar(datos: any){
    return this.http.post(`${this.urlBase}/almacen`, datos);
  }

  funMostrar(id: number){
    return this.http.get(`${this.urlBase}/almacen/${id}`);
  }

  funModificar(id: number, datos: any){
    return this.http.patch(`${this.urlBase}/almacen/${id}`, datos);
  }

  funEliminar(id: number){
    return this.http.delete(`${this.urlBase}/almacen/${id}`);
  }
}
