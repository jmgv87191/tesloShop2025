import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, Validators  } from "@angular/forms";
import { RouterLink } from "@angular/router";


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

    console.log({ email, password })


  }

}
