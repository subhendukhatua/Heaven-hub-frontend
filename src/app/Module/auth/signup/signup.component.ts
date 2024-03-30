import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from 'src/app/State/Auth/auth.action';
import { AuthService } from 'src/app/State/Auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  @Input() changeTamplate:any

  constructor(private formbuilder:FormBuilder, private store:Store, private authService:AuthService){

  }
  loginForm : FormGroup = this.formbuilder.group({
    firstName:["",[Validators.required]],
    lastName:["",[Validators.required]],
    email:['',[Validators.required, Validators.email]],
    password:["", [Validators.required, Validators.minLength(8)]]
  })

  submitForm():void{
    if(this.loginForm.valid){
      console.log("login req data ", this.loginForm.value);
      this.authService.register(this.loginForm.value);
    }
  }

}
