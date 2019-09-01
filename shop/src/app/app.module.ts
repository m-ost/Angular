import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product-shop/components/product-component/product.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-shop/components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
