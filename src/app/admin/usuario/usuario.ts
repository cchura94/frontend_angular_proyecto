import { Component, inject, OnInit, signal } from '@angular/core';
import { UsuarioService } from './../../core/services/usuario.service'
import { FormsModule } from '@angular/forms';

interface UserInterface{
  id?: string,
  name: string,
  email: string,
  estado?: boolean,
  password?: string
}


@Component({
  selector: 'app-usuario',
  imports: [FormsModule],
  templateUrl: './usuario.html',
  styleUrl: './usuario.scss'
})
export class Usuario implements OnInit {
  
  usuarioService = inject(UsuarioService);
  usuarios = signal<UserInterface[]>([]); // any[] = [];
  
  usuario = signal<UserInterface>({email: "", name: "", password: ""})

  isModeEditar = signal(false);

  ngOnInit() {
    this.funGetUsuarios()
  }

  abrirModal(){
    
    const modal = document.getElementById("crearUsuarioModal");
    if(modal){
      modal.classList.remove('hidden');
    }
  }

  abrirnuevoUsuarioModal(){
    this.usuario.set({email: "", name: "", password: ""})
    this.abrirModal()
  }

  cerrarModal(){
    const modal = document.getElementById("crearUsuarioModal");
    if(modal){
      modal.classList.add('hidden');
    }
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

  funGuardarUsuario(){
    
    if(this.isModeEditar()){
      const {id , ...rest} = this.usuario()
      this.usuarioService.funModificar(this.usuario().id, rest).subscribe(
        (res) => {
          this.funGetUsuarios()
        },
        (error) => {
          alert("Error al guardar usuario")
        }
      )
    }else{

      this.usuarioService.funGuardar(this.usuario()).subscribe(
        (res) => {
          console.log(res)
          this.funGetUsuarios()
        }
      )
    }

    this.usuario.set({email: '', name: '', password: ''})


    this.cerrarModal()
  }

  editarUsuario(user: any){
    console.log(user);
    this.isModeEditar.set(true);
    const {password, roles, estado, ...rest} = user;
    this.usuario.set({...rest});
    this.abrirModal();
  }


}
