import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  urlBase = environment.urlBackendApi;
  http = inject(HttpClient);

  funListar(tipo_nota: string=''): Observable<any>{
    return this.http.get<any>(`${this.urlBase}/nota?tipo_nota=${tipo_nota}`);
  }

  funGuardar(datos: any){
    return this.http.post(`${this.urlBase}/nota`, datos);
  }

  funMostrar(id: number){
    return this.http.get(`${this.urlBase}/nota/${id}`);
  }

  funModificar(id: number, datos: any){
    return this.http.patch(`${this.urlBase}/nota/${id}`, datos);
  }

  funEliminar(id: number){
    return this.http.delete(`${this.urlBase}/nota/${id}`);
  }
}
