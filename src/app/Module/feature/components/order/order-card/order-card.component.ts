import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent {

  constructor(private router:Router){

  }
  navigateToOrderDetils=(id:number)=>{
    this.router.navigate([`orders/${id}`]);

  }

  

}
