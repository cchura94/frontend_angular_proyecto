import { Component, inject, signal, Signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CategoriaService } from '../../../core/services/categoria.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface CategoriaInterface{
  id?: number,
  nombre: string,
  descripcion?: string
}


@Component({
  selector: 'app-categoria',
  imports: [ReactiveFormsModule, TableModule, ButtonModule, DialogModule, InputTextModule],
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss'
})
export class Categoria {

  categoriaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(200)])
  });

  categorias= signal<any[]>([]);
  categoriaService = inject(CategoriaService);
  visible= signal(false);
  categoriaid_selected = signal(0);


  
  constructor(){
    this.funGetCategorias();
  }

  funGetCategorias(){
    this.categoriaService.funListar().subscribe(
      (res: any)=> {
        this.categorias.set(res);

        // this.visible.set(false);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  showDialog() {
      this.visible.set(true);
  }

  funGuardarCategoria(){

    if(this.categoriaid_selected() > 0){
      this.categoriaService.funModificar(this.categoriaid_selected(), this.categoriaForm.value).subscribe(
        (res) => {
          this.funGetCategorias();
          this.visible.set(false);
          this.categoriaForm.reset();
        },
        (error) => {
            console.log(error);
        }
      )
    }else{
      this.categoriaService.funGuardar(this.categoriaForm.value).subscribe(
        (res) => {
          this.funGetCategorias();
  
          this.visible.set(false);
          this.categoriaForm.reset();
        },
        (error) => {
            console.log(error);
        }
      )

    }
  }

  editarCategoria(cat: CategoriaInterface){
    console.log(cat);
    let categoria_id: number = cat.id || -1;
    this.categoriaid_selected.set(categoria_id);
    this.categoriaForm.setValue({nombre: cat.nombre, descripcion: cat.descripcion + ''}) 
    

    this.visible.set(true);

  }
  eliminarCategoria(cat: CategoriaInterface){
    if(confirm("¿Está seguro de eliminar la categoria?")){
      let categoria_id: number = cat.id || -1;
      this.categoriaService.funEliminar(categoria_id).subscribe(
        (res) => {
          alert("Categoria Eliminada");
          this.funGetCategorias();
        }
      )
    }
  } 

}
