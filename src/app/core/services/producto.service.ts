import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  urlBase = environment.urlBackendApi;
  http = inject(HttpClient);

  funListar(almacen: number=1, page:number=1, limit:number=10, search: string=''){
    return this.http.get(`${this.urlBase}/producto?page=${page}&limit=${limit}&almacen=${almacen}&search=${search}&activo=true&order=ASC&sortBy=id`);
  }

  funGuardar(datos: any){
    return this.http.post(`${this.urlBase}/producto`, datos);
  }

  funMostrar(id: number){
    return this.http.get(`${this.urlBase}/producto/${id}`);
  }

  funModificar(id: number, datos: any){
    return this.http.patch(`${this.urlBase}/producto/${id}`, datos);
  }

  funEliminar(id: number){
    return this.http.delete(`${this.urlBase}/producto/${id}`);
  }
}
