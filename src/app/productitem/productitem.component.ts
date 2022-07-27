import { Component, OnInit } from '@angular/core';
import { product } from '../models/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {
  productdisplayed:product;
  cartproduct:product;
  quantity:number=0;

  constructor(private productservice:ProductService) {
    this.productdisplayed={
      id:1,
      name:"",
      url:"",
      description:"",
      price:0,
      quantity:1
    }
    this.cartproduct={
      id:1,
      name:"",
      price:1,
      url:"",
      description:"",
      quantity:0
    }
   }

  ngOnInit(): void {
    this.productdisplayed={
      id:JSON.parse(localStorage.getItem("productid") || '{}'),
      name:localStorage.getItem("productname") || '{}',
      url:localStorage.getItem("producturl") || '{}',
      description:localStorage.getItem("productdesc") || '{}',
      price:JSON.parse(localStorage.getItem("productprice") || '{}'),
      quantity:JSON.parse(localStorage.getItem("productqua") || '{}')
    }
  }
  ngOnDestroy(): void{
    localStorage.clear();
  }
  onsubmit(){
    this.cartproduct.id=this.productdisplayed.id;
    this.cartproduct.name=this.productdisplayed.name;
    this.cartproduct.description=this.productdisplayed.description;
    this.cartproduct.price=this.productdisplayed.price;
    this.cartproduct.url=this.productdisplayed.url;
    this.cartproduct.quantity=this.quantity;
    if(this.cartproduct.quantity>0){
      this.productservice.addToCart(this.cartproduct);
      alert("added to the cart");
    }else if(this.cartproduct.quantity==0){
      this.productservice.addToCart(this.cartproduct);
    }
    this.quantity=0;
  }
}
