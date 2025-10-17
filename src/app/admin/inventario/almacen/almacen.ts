import { Component, inject, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AlmacenService } from '../../../core/services/almacen.service';

@Component({
  selector: 'app-almacen',
  imports: [TableModule],
  templateUrl: './almacen.html',
  styleUrl: './almacen.scss'
})
export class Almacen {
  almacenes = signal([]);
  almacenService = inject(AlmacenService)
  
  ngOnInit(): void {
    this.getAlamcenes()
  }

  getAlamcenes(){
    this.almacenService.funListar().subscribe(
      (data: any) => {
        console.log(data)
        this.almacenes.set(data);
      }
    )
  }
}
