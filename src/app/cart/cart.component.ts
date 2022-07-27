import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../models/product';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product:Observable<product[]>
  quantity:number=0;
  totalprice:number=0;
  constructor(private productservice:ProductService) {
    this.product=this.productservice.getcartproduct();
    this.totalprice=this.productservice.totalprice();
  }

  ngOnInit(): void {

  }
  modifycart(product:product){
    if(product.quantity<=0){
      this.onsubmit(product);
    }else{
    this.productservice.addToCart(product);
    this.totalprice=0;
    this.totalprice=this.productservice.totalprice();
    }
    return this.totalprice;
  }
  onsubmit(product:product){
    this.productservice.removefromcart(product);
    this.totalprice=0;
    this.totalprice=this.productservice.totalprice();
    return this.totalprice;
  }
}
