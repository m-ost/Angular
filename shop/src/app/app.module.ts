import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './shop/product-component/product.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { CartComponent } from './shop/cart-list/cart.component';
import { CartItemComponent } from './shop/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
