import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './State/User/user.service';
import { Store, select } from '@ngrx/store';
import { AppState } from './Models/AppState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce_app';

  constructor(private router:Router, private userService:UserService, private store:Store<AppState>){

  }

  ngOnInit(){
    if(localStorage.getItem("jwt")) this.userService.getUserProfile()
    this.store.pipe(select((store)=>store.auth)).subscribe((user)=>{
      this.userService.getUserProfile();
      console.log("store", this.store)
    })
  }
}
