import { CommonModule } from '@angular/common';
import { Component, inject, signal, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ProductoService } from '../../../core/services/producto.service';
import { DialogModule } from 'primeng/dialog';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CategoriaService } from '../../../core/services/categoria.service';

@Component({
  selector: 'app-producto',
  imports: [ToastModule, ToolbarModule, ButtonModule, TableModule, CommonModule, DialogModule, ReactiveFormsModule, RadioButtonModule, InputNumberModule, InputTextModule, TextareaModule],
  templateUrl: './producto.html',
  styleUrl: './producto.scss',
})
export class Producto {

  constructor(){
    this.getProductos()
    this.cargarCategorias()
  }
  productos = signal([]);
  productDialog = signal(false);
  producto = signal({imagen: '', nombre:"", descripcion: '', unidad_medida: ''});
  submitted = signal<boolean>(false);
  totalRecords= signal(0)
  loading = signal(false)
  categorias = signal([])

  productoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl(''),
    codigo_barra: new FormControl(''),
    unidad_medida: new FormControl('UNIDAD'),
    marca: new FormControl("PRUEBA"),
    categoria: new FormControl(1),
    precio_venta_actual: new FormControl("0"),
    estado: new FormControl(true)
  });

  @ViewChild('dt') dt!: Table;
  productoService = inject(ProductoService);
  categoriaService = inject(CategoriaService);

  cargarDatos(event: any){
    let page = event.first / event.rows + 1;
    this.getProductos(page, event.rows);
  }

  cargarCategorias(){
    this.categoriaService.funListar().subscribe(
      (res: any) => {
        this.categorias.set(res);
      }
    )
  }

  // cols!: Column[];

  openNew() {
    this.productDialog.set(true)
  }

  exportCSV() {
    this.dt.exportCSV();
  }

  getProductos(page: number = 1, limit: number = 5){
    this.loading.set(true);
    this.productoService.funListar(1,page, limit, "").subscribe(
      (res: any) => {
        console.log(this.loading());
        this.productos.set(res.data);
        this.totalRecords.set(res.total);
        
        this.loading.set(false);

      },
      (error) => {

      }
    )
    this.loading.set(false);
  }

  editProduct(pod:any){

  }

  deleteProduct(prod: any){

  }

  funGuardarProducto(){
    console.log(this.producto());
    this.productoForm.value.codigo_barra = "PROD"+Date.now();
    this.productoForm.value.precio_venta_actual = this.productoForm.value.precio_venta_actual+""
    this.productoService.funGuardar(this.productoForm.value).subscribe(
      (res) => {
        this.getProductos();
        this.productoForm.reset()
        this.productDialog.set(false);
      }
    )
  }
  
}
