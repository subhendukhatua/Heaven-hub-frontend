import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/State/Cart/cart.service';
import { orderService } from 'src/app/State/Order/order.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {
  addresses=[];
  myForm:FormGroup=this.formBuilder.group({
    firstName:["",Validators.required],
    lastName:["",Validators.required],
    streetAddress:["",Validators.required],
    city:["",Validators.required],
    state:["",Validators.required],
    zipCode:["",Validators.required],
    mobile:["",Validators.required]

  })

  constructor(private formBuilder:FormBuilder, private orderService:orderService,
    private cartService:CartService){

  }

  handleCreateOrder(item:any){

  }

  handleSubmit(){
    const formValue = this.myForm.value;
    this.orderService.createOrder(formValue);
    console.log("form data",formValue )
    this.addresses = formValue;
    console.log("form Values", this.addresses);
  }

}
