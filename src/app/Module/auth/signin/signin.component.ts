import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/State/Auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  @Input() changeTamplate:any

  constructor(private formbuilder:FormBuilder, private store:Store, private authService:AuthService){

  }
  loginForm : FormGroup = this.formbuilder.group({
    email:['',[Validators.required, Validators.email]],
    password:["", [Validators.required, Validators.minLength(8)]]
  })

  submitForm():void{
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value)
      console.log("login req data ", this.loginForm.value)
    }
  }


}
