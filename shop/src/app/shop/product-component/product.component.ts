import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() public product: Product;
  @Output() public buy: EventEmitter<Product> = new EventEmitter<Product>();

  onBuy(): void {
    console.log('The prouct was add to the cart');
    this.buy.emit(this.product);
  }
}
