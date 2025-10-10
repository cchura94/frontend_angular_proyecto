import { CommonModule } from '@angular/common';
import { Component, inject, signal, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ProductoService } from '../../../core/services/producto.service';

@Component({
  selector: 'app-producto',
  imports: [ToastModule, ToolbarModule, ButtonModule, TableModule, CommonModule],
  templateUrl: './producto.html',
  styleUrl: './producto.scss',
})
export class Producto {

  constructor(){
    this.getProductos()
  }
  productos = signal([]);

  @ViewChild('dt') dt!: Table;
  productoService = inject(ProductoService)

  // cols!: Column[];

  openNew() {}

  exportCSV() {
    this.dt.exportCSV();
  }

  getProductos(){
    this.productoService.funListar().subscribe(

      (res: any) => {
        this.productos.set(res.data) 
      },
      (error) => {

      }
    )
  }

  editProduct(pod:any){

  }

  deleteProduct(prod: any){

  }
}
