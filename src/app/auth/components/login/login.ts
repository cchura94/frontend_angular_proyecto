import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
  });

  router = inject(Router)

  funIngresar(){
    
    if(this.loginForm.value.email == "admin@mail.com" && this.loginForm.value.password== 'admin54321'){
      this.router.navigate(["/admin/perfil"])
    }else{
      alert("Credenciales incorrectas...")
    }
    
  }

  funPersonalizado(){
    alert("Personalizado...")
  }

}
