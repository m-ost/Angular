import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { CategoryList } from '../models/category.enum';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly cart: Product[];

  constructor() {
    this.cart = [];

  }
  public addToCart(item): void {
    this.cart.push(item);
  }
}
