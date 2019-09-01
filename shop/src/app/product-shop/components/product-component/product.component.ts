import { Component, OnInit, Input } from '@angular/core';
import { CategoryList } from '../../models/category.enum';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Product[];
  public selectedProduct: Product;

  constructor() {}

  ngOnInit() {
    this.products = [
      { name: 'apple',  price: 9, category: CategoryList.Food, isAvailable: true },
      { name: 'orange', price: 25, category: CategoryList.Food, isAvailable: false },
      { name: 'cherry', price: 34, category: CategoryList.Food, isAvailable: false }
    ]
  }

onBuyProduct(product: Product) {
  this.selectedProduct = product;
  console.log(this.selectedProduct.name)
}
}
