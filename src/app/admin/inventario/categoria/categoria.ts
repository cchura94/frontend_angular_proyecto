import { Component, inject, signal, Signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CategoriaService } from '../../../core/services/categoria.service';

@Component({
  selector: 'app-categoria',
  imports: [TableModule ],
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss'
})
export class Categoria {

  categorias= signal<any[]>([]);
  categoriaService = inject(CategoriaService);

  constructor(){
    this.funGetCategorias();
  }

  funGetCategorias(){
    this.categoriaService.funListar().subscribe(
      (res: any)=> {
        this.categorias.set(res);
      } 
    )
  }

}
