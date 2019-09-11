import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '../services/cart.service';
import { Product, ProductObject, CartItemsCount } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  public cart: Product[] = [];
  public cartItemsCount: CartItemsCount;
  private cartUpdateSubscription : Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartUpdateSubscription = this.cartService.getCartUpdate()
      .subscribe((cartObj: ProductObject) => {
        console.log(cartObj);
        this.cart = cartObj.cart;
        this.cartItemsCount = cartObj.cartItemsCount;
      });
  }

  ngOnDestroy(): void {
    this.cartUpdateSubscription.unsubscribe();
  }
}
