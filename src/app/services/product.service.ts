import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products:product[]=[];
  private products$=new BehaviorSubject<product[]>([]);
  private cartproduct:product[]=[];
  private cartproduct$=new BehaviorSubject<product[]>([]);
  total:number=0;
  constructor(private http:HttpClient) { }

  loadproduct(){
    this.http.get<product[]>('assets/data.json').subscribe((data:product[])=>{
      this.products=data;
      this.products$.next(this.products);
    })
  }
  getproduct():Observable<product[]>{
    return this.products$.asObservable();
  }
  addToCart(product:product):void{
    const index = this.cartproduct.findIndex(t => t.id === product.id);
    if(index==-1){
      this.cartproduct.push(product);
      this.cartproduct$.next(this.cartproduct)
    }else{
      if(product.quantity==0){
        this.removefromcart(product);
      }else{
      this.cartproduct[index].quantity=product.quantity ;
      this.cartproduct$.next(this.cartproduct);
      }
    }
  }
  getcartproduct():Observable<product[]>{
    return this.cartproduct$.asObservable();
  }
  removefromcart(product:product){
    alert("Item is removed from the cart")
    this.cartproduct.forEach((element,index)=>{
      if(element.id==product.id) this.cartproduct.splice(index,1);
   });
   this.cartproduct$.next(this.cartproduct);
  }
  totalprice(){
    this.total=0;
    for(let i=0 ;i<this.cartproduct.length;i++){
      this.total=this.total+(this.cartproduct[i] .price*this.cartproduct[i].quantity);
    }
    return this.total;
  }
}
