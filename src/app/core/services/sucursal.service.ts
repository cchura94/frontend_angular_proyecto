import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  urlBase = environment.urlBackendApi;
  http = inject(HttpClient);

  funListar(): Observable<any>{
    return this.http.get<any>(`${this.urlBase}/sucursal`);
  }

  funGuardar(datos: any){
    return this.http.post(`${this.urlBase}/sucursal`, datos);
  }

  funMostrar(id: number){
    return this.http.get(`${this.urlBase}/sucursal/${id}`);
  }

  funModificar(id: number, datos: any){
    return this.http.patch(`${this.urlBase}/sucursal/${id}`, datos);
  }

  funEliminar(id: number){
    return this.http.delete(`${this.urlBase}/sucursal/${id}`);
  }
}
