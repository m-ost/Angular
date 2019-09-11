import { Component, Input } from '@angular/core';

import { CartService } from '../services/cart.service';

import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() product: Product;

  constructor(
  	private cartService: CartService
  ) {}

  removeProduct(): void {
    this.cartService.updateCounter(this.product.id, false);
  }
}
