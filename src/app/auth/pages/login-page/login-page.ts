import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms'
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login-page',
  imports: [ RouterLink,ReactiveFormsModule  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {

  authService = inject(AuthService)
  fb: FormBuilder = inject( FormBuilder );
  router = inject(Router)

  hasError = signal(false)
  isPosting = signal(false)


  public loginForm:FormGroup = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required,Validators.minLength(3)]],
  })


  onSubmit(){

    if(this.loginForm.invalid){
        this.hasError.set(true)
        setTimeout(() => {
          this.hasError.set(false)
        }, 2000);
        return
    }

      const{ email='', password='' } = this.loginForm.value

      this.authService.login( email!, password! ).subscribe((isAuthenticated)=>{
        
        if (isAuthenticated) {
          this.router.navigateByUrl('/')

          return;
        }


      })
    

  }

}
