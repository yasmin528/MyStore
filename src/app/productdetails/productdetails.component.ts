import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  cartproduct:product;
  quantity:number=0;
  @Input() product:product;
  @Output() productdetails:EventEmitter<product>=new EventEmitter;

  constructor(private productservice:ProductService) {
    this.product={
      id:1,
      name:"",
      price:1,
      url:"",
      description:"",
      quantity:0
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
  }

  onsubmit(){
    this.cartproduct.id=this.product.id;
    this.cartproduct.name=this.product.name;
    this.cartproduct.description=this.product.description;
    this.cartproduct.price=this.product.price;
    this.cartproduct.url=this.product.url;
    this.cartproduct.quantity=this.quantity;
    if(this.cartproduct.quantity>0){
      this.productservice.addToCart(this.cartproduct);
      alert("added to the cart");
    }else if(this.cartproduct.quantity==0){
      this.productservice.addToCart(this.cartproduct);
    }
    this.quantity=0;
  }

  display(){
    localStorage.setItem("productid",this.product.id.toString())
    localStorage.setItem("productname",this.product.name)
    localStorage.setItem("productprice",this.product.price.toString())
    localStorage.setItem("producturl",this.product.url)
    localStorage.setItem("productdesc",this.product.description)
    localStorage.setItem("productqua",this.product.quantity.toString())
    this.productdetails.emit(this.product)
  }
}
