import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { CartComponent } from './cart/cart.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductitemComponent } from './productitem/productitem.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { SuccessfullpageComponent } from './successfullpage/successfullpage.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    NavbarComponent,
    FormComponent,
    CartComponent,
    ProductdetailsComponent,
    ProductitemComponent,
    SuccessfullpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
