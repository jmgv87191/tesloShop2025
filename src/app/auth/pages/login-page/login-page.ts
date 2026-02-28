import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, Validators  } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { Auth } from '../../services/auth';


@Component({
  selector: 'app-login-page',
  imports: [RouterLink,ReactiveFormsModule ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  fb = inject(FormBuilder);
  hasError = signal(false);
  isPosting = signal(true);
  router = inject(Router)

  authService = inject(Auth);

  loginform = this.fb.group({
    email:[ '',[Validators.required, Validators.email] ],
    password:[ '', [Validators.required, Validators.minLength(6)] ]
  })

  onSubmit(){
    if(this.loginform.invalid){
      this.hasError.set(true)
      setTimeout(() => {
          this.hasError.set(false)
      }, 2000);
      return
    }

    const { email = '', password='' } = this.loginform.value;


    this.authService.login(email!, password!).subscribe((isAuthenticated)=>{

      if (isAuthenticated) {
        this.router.navigateByUrl('/');
        return;
      }

      this.hasError.set(true)
      setTimeout(() => {
          this.hasError.set(false)
      }, 2000);
    })
 


  }

}
