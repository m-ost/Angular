import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Product, ProductObject, CartItemsCount } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  private cartUpdate = new Subject<ProductObject>();
  private cartItemsCount: CartItemsCount = {};

  public addToCart(item: Product): void {
    if (!this.cartItemsCount[item.id]) {
      this.cart.push(item);
    }
    this.updateCounter(item.id, true);
    this.handleCartUpdate();
  }
  
  public removeFromCart(id: number): void {
    this.cart = this.cart.filter((item: Product) => item.id !== id);
    this.handleCartUpdate();
  }

  public getCartUpdate(): Subject<ProductObject>  {
    return this.cartUpdate;
  }

  public updateCounter(id: number, add: boolean): void {
    if (add) {
      if (!this.cartItemsCount[id]) {
      	this.cartItemsCount[id] = 1;
      } else {
      	this.cartItemsCount[id] += 1;
      }
    } else {
      this.cartItemsCount[id] -= 1;
      if (this.cartItemsCount[id] === 0) {
        this.removeFromCart(id);
      }
    }
  }

  private handleCartUpdate(): void {
    if (this.cartUpdate.observers.length) {
      this.cartUpdate.next({
        cart: this.cart,
        cartItemsCount: this.cartItemsCount
      });
    }
  }
}
