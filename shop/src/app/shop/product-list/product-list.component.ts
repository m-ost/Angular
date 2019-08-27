import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CategoryList } from '../models/category.enum';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Product[];

  constructor() {}

  ngOnInit() {
    this.products = [
      { name: 'Apple', price: 21, category: CategoryList.Food, isAvailable: true },
      { name: 'Orange', price: 43, category: CategoryList.Food, isAvailable: false },
      { name: 'Cup', price: 12, category: CategoryList.Kitchen, isAvailable: true },
    ];
  }
}
