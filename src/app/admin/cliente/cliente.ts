import { Component, inject, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ClienteService } from '../../core/services/cliente.service';

@Component({
  selector: 'app-cliente',
  imports: [TableModule],
  templateUrl: './cliente.html',
  styleUrl: './cliente.scss'
})
export class Cliente {
  clientes = signal([]);
  clienteService = inject(ClienteService)
  
  ngOnInit(): void {
    this.getAlamcenes()
  }

  getAlamcenes(){
    this.clienteService.funListar().subscribe(
      (data: any) => {
        console.log(data)
        this.clientes.set(data);
      }
    )
  }

}
