import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../models/product';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products:Observable<product[]>;

  constructor(private productservice:ProductService) {
    this.productservice.loadproduct();
    this.products=this.productservice.getproduct();
   }

  ngOnInit(): void {
  }

}
