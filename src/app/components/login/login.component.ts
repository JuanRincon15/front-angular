import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',Validators.required] // Puedes añadir el campo de contraseña aquí
    });
  }
  onSubmit(){

    if (this.loginForm.valid){
      const formData = this.loginForm.value;
      console.log(formData.email+"-"+formData.password);
    }

  }
}
