import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { CategoryList } from '../models/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductShopService {
  private readonly products: Product[] = [
    { id: 0, name: 'Apple', price: 21, category: CategoryList.Food, isAvailable: true },
    { id: 1, name: 'Orange', price: 43, category: CategoryList.Food, isAvailable: false },
    { id: 2, name: 'Cup', price: 12, category: CategoryList.Kitchen, isAvailable: true },
  ];

  public getProducts(): Product[] {
    return this.products;
  }
}
