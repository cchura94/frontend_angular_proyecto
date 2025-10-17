import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  urlBase = environment.urlBackendApi;
  http = inject(HttpClient);

  funListar(): Observable<any>{
    return this.http.get<any>(`${this.urlBase}/cliente`);
  }

  funGuardar(datos: any){
    return this.http.post(`${this.urlBase}/cliente`, datos);
  }

  funMostrar(id: number){
    return this.http.get(`${this.urlBase}/cliente/${id}`);
  }

  funModificar(id: number, datos: any){
    return this.http.patch(`${this.urlBase}/cliente/${id}`, datos);
  }

  funEliminar(id: number){
    return this.http.delete(`${this.urlBase}/cliente/${id}`);
  }
}
