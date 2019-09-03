import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CategoryList } from '../models/category.enum';
import { ProductShopService } from '../services/product-shop.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Product[];

  constructor(private productShopService: ProductShopService) {}

  ngOnInit() {
    this.products = this.productShopService.getProducts();
  }
}
