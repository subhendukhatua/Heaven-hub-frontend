import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { CartService } from 'src/app/State/Cart/cart.service';
import { orderService } from 'src/app/State/Order/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart = [];
  cartItems:any;
  items:any;
  totalPrice:any;
  

  constructor(private router:Router, private cartService:CartService, private store:Store<AppState>){

  }

  ngOnInit(){
    this.cartService.getCart()
    this.store.pipe(select((store)=>store.cart)).subscribe((cart)=>{
      this.cartItems = cart.cartItems;
      
      console.log("Store data ", this.cartItems);
      
      
      
    });
  }

  
  

  navigateToCheckout(){
    this.router.navigate(["checkout"]);
  }

}
