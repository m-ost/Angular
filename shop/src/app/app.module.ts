import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './shop/product-component/product.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { ProductShopService } from './shop/services/product-shop.service';
import { CartComponent } from './shop/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  providers: [ProductShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
