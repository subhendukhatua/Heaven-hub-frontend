import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { orderService } from 'src/app/State/Order/order.service';
import { PaymentService } from 'src/app/State/Payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  products = [];
  order:any;

  constructor(private activatedRoute:ActivatedRoute,
    private orderService:orderService,
    private store:Store<AppState>,
    private paymentService:PaymentService ){

  }

  ngOnInit(){
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    if(id){
      this.orderService.getOrderById(id);
    }
    this.store.pipe(select(store=>store.order)).subscribe((order)=>{
      this.order = order.order;

    })
  }
  redirectToPayment=()=>{
    console.log("inside redirect to payment")
    if(this.order.id){
      this.paymentService.createPayment(this.order.id);
    }
  }
}
