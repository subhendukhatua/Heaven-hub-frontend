import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { CartService } from 'src/app/State/Cart/cart.service';
import { productService } from 'src/app/State/Product/product.service';
import { lehngacholiPage2 } from 'src/data/Saree/lenghaCholiPage2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  selectedSize:any;
  reviews=[1,1,1,1];
  relatedProducts:any;
  product:any;
  productId:any;
  

  constructor(private router: Router,
     private productService:productService,
     private cartService:CartService,
     private activatedRoute:ActivatedRoute,
     private store:Store<AppState>){

  }

  ngOnInit(){
    this.relatedProducts=lehngacholiPage2;
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.productService.findProductsById(id);
    this.productId = id;
    this.store.pipe(select((store)=>store.product)).subscribe((product)=>{
      this.product = product.product;
      console.log("Store data ", product.product);
    });
  }

  handleAddToCart(){
    console.log("Selected size", this.selectedSize);
    const data = {size:this.selectedSize, productId:this.productId}
    this.cartService.addItemToCart(data);
    this.cartService.getCart();
    this.router.navigate(['cart']);
    
  }

}
