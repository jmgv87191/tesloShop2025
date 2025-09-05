import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup,Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css'
})
export class RegisterPage {

  fb = inject( FormBuilder )
  hasError = signal(false)
  authService = inject(AuthService)

  registerForm: FormGroup = this.fb.group({

    email: ["",Validators.required],
    password:["",Validators.required],
    fullName:[ "",Validators.required ]
  })

  onSubmit(){
    this.authService.singUp( this.registerForm.value ).subscribe((data)=>{
      console.log(data)
    })
  }

}
