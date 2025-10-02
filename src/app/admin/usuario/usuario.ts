import { Component, inject, OnInit, signal } from '@angular/core';
import { UsuarioService } from './../../core/services/usuario.service'

interface UserInterface{
  id: string,
  name: string,
  email: string,
  estado: boolean,
  password?: string
}


@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.scss'
})
export class Usuario implements OnInit {
  
  usuarioService = inject(UsuarioService);
  usuarios = signal<UserInterface[]>([]); // any[] = [];
  
  ngOnInit() {
    this.funGetUsuarios()
  }

  funGetUsuarios(){
    this.usuarioService.funListar().subscribe(
      (res: any) => {
        console.log(res)
        this.usuarios.set(res);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


}
