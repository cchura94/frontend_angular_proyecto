import { Component, inject, OnInit, signal } from '@angular/core';
import { SucursalService } from '../../../core/services/sucursal.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-sucursal',
  imports: [TableModule],
  templateUrl: './sucursal.html',
  styleUrl: './sucursal.scss'
})
export class Sucursal implements OnInit {
  
  sucursales = signal([]);
  sucursalService = inject(SucursalService)
  
  ngOnInit(): void {
    this.getSucursales()
  }

  getSucursales(){
    this.sucursalService.funListar().subscribe(
      (data: any) => {
        console.log(data)
        this.sucursales.set(data);
      }
    )
  }


}
