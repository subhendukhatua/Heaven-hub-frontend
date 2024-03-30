import { Component } from '@angular/core';
import { filters, singleFilter } from './FilterData';
import { mensPantsPage1 } from 'src/data/pants/men_page1';
import { ActivatedRoute,Router } from '@angular/router';
import { flush } from '@angular/core/testing';
import { productService } from 'src/app/State/Product/product.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  filterData:any;
  singleFilterData:any;
  products:any;
  menPants:any;
  levelThree:any;

  constructor(private router:Router, 
    private activatedRoute:ActivatedRoute,
    private productService:productService,
    private store:Store<AppState>){}

  ngOnInit(){
    this.filterData = filters;
    this.singleFilterData = singleFilter;
    this.menPants = mensPantsPage1;

    this.activatedRoute.paramMap.subscribe(
      (params)=>{
       this.levelThree = params.get("levelThree")
        var reqData = {
          category:params.get("levelThree"),
          color:[],
          sizes:[],
          minPrice:0,
          maxPrice:20000,
          minDiscount:0,
          pageNumber:1,
          pageSize:9,
          stock:null,

        };
        
        this.productService.findProductsByCategory(reqData); 
      }
    );

      this.activatedRoute.queryParams.subscribe(
        (params)=>{
          const color = params["color"]
          const sizes = params["sizes"]
          const price = params["price"]
          const discount = params["discount"]
          const stock = params["stock"]
          const sort = params["sort"]
          const pageNumber = params["pageNumber"]
          const minPrice = price?.split("-")[0]
          const maxPrice = price?.split("-")[1]
          

          var reqData = {
            category:this.levelThree,
            color:color?[color].join(","):[],
            sizes:sizes,
            minPrice:minPrice?minPrice:0,
            maxPrice:maxPrice?maxPrice:100000,
            minDiscount:discount?discount:0,
            pageNumber:pageNumber?pageNumber:0,
            pageSize:9,
            stock:null,
            sort:sort?sort:"price_low"
            
  
          };
          this.productService.findProductsByCategory(reqData);
        }
      )

      this.store.pipe(select((store)=>store.product)).subscribe((product)=>{
        this.products = product.products.content;
        console.log("Store data ", product.products.content);
      });
  }



  handleMultipleSelectFilter(value:string,sectionId:string){
    const queryParams = {...this.activatedRoute.snapshot.queryParams};
    const filterValues = queryParams[sectionId]?queryParams[sectionId].split(","):[];
    const valueIndex = filterValues.indexOf(value);

    if(valueIndex!=-1){
      filterValues.splice(valueIndex, 1);
    }
    else{
      filterValues.push(value)
    }

    if(filterValues.length>0){
      queryParams[sectionId] = filterValues.join(",");
    }
    else{
      delete queryParams[sectionId];
    }

    this.router.navigate([],{queryParams})
    //console.log(queryParams);

  }

  handleSingleSelectFilter(value:string, sectionId:string){
    const queryParams = {...this.activatedRoute.snapshot.queryParams};
    queryParams[sectionId] = value;

    this.router.navigate([],{queryParams});
  }
  

}
