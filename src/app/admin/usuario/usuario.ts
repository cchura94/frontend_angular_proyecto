import { Component, inject, OnInit } from '@angular/core';
import { UsuarioService } from './../../core/services/usuario'

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.scss'
})
export class Usuario implements OnInit {
  
  usuarioService = inject(UsuarioService);
  usuarios: any[] = [];
  
  ngOnInit() {
    this.funGetUsuarios()
  }

  funGetUsuarios(){
    this.usuarioService.funListar().subscribe(
      (res: any) => {
        console.log(res)
        this.usuarios = res;
      },
      (error: any) => {
        alert("error al obtener usuarios");
      }
    );
  }


}
