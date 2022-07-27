import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartComponent } from './cart/cart.component';
import { ProductitemComponent } from './productitem/productitem.component';
import { SuccessfullpageComponent } from './successfullpage/successfullpage.component';
const routes: Routes = [
  {path:'',component:ProductlistComponent},
  {path:'cart',component:CartComponent},
  {path:'productitem',component:ProductitemComponent},
  {path:'success',component:SuccessfullpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
