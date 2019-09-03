import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { CategoryList } from '../models/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductShopService {
  private readonly products: Product[];

  constructor() {
    this.products = [
      { name: 'Apple', price: 21, category: CategoryList.Food, isAvailable: true },
      { name: 'Orange', price: 43, category: CategoryList.Food, isAvailable: false },
      { name: 'Cup', price: 12, category: CategoryList.Kitchen, isAvailable: true },
    ];

  }
  public getProducts(): Product[] {
    return this.products;
  }
}
