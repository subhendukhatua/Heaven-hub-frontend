import { Component } from '@angular/core';
import { gounsPage1 } from 'src/data/Gouns/gounsPage1';
import { kurtaPage1 } from 'src/data/Kurta/kurta1';
import { menJeans } from 'src/data/Men/men_Jeans';
import { mens_kurta } from 'src/data/Men/men_kurta1';
import { lehengaCholiPage2 } from 'src/data/Women/lehengaCholiPage1';
import { mensShoesPage1 } from 'src/data/shoes1';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menJeans:any;
  womenGouns:any;
  lehengaCholi:any;
  mensKurta:any;
  mensShoes:any;


  ngOnInit(){
    this.menJeans=menJeans.slice(0,5); 
    this.womenGouns= gounsPage1.slice(0,5);
    this.lehengaCholi= lehengaCholiPage2.slice(0,5);
    this.mensKurta = mens_kurta.slice(0,5);
    this.mensShoes = mensShoesPage1.slice(0,5);
  }
}
