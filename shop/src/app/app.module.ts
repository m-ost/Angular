import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product-component/product.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ProductListComponent,
    ProductComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
