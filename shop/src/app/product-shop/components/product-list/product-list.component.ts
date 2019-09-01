import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public message: string;
  @Input() public selectedProduct: Product;
  @Input() public products: Product[];
  @Output() public buyProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {}

  onBuy(): void {
    this.buyProduct.emit(this.selectedProduct);
    this.message = `The ${this.selectedProduct} was added`;
    console.log(this.message);
  }
}
