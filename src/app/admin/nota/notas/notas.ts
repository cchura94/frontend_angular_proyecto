import { Component, inject, signal } from '@angular/core';
import { NotaService } from '../../../core/services/nota.service';
import { TableModule } from 'primeng/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-notas',
  imports: [TableModule, ButtonModule, DialogModule],
  templateUrl: './notas.html',
  styleUrl: './notas.scss'
})
export class Notas {
  notas = signal([]);
  notaService = inject(NotaService)
  route = inject(ActivatedRoute)
  router = inject(Router)

  tipo_nota = signal("");
  visibleNotasMovimientos = signal(false)
  detalle_nota = signal({id: 0, cliente:{tipo: '', correo: ''}, movimientos: []})
  

  
  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any) => {
      this.tipo_nota.set(params.tipo);
      
      this.getNotas();
    })
  }

  getNotas(){
    this.notaService.funListar(this.tipo_nota()).subscribe(
      (data: any) => {
        console.log(data)
        this.notas.set(data);
      }
    )
  }

  funCompras(){
    this.router.navigate(['/admin/nota'], {
      queryParams: {
        tipo: 'compra'
      }
    });
  }

  funVentas(){
    this.router.navigate(['/admin/nota'], {
      queryParams: {
        tipo: 'venta'
      }
    });
  }

  showDialogNotaMovimientos(n: any){
    this.detalle_nota.set(n);
    this.visibleNotasMovimientos.set(true)
  }
}
