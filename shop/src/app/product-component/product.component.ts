import { Component, OnInit } from '@angular/core';
import { CategoryList } from './models/category.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public name: string;
  public description: string;
  public price: number;
  public category: CategoryList;
  public isAvailable: boolean;
  public message: string;
  public cart: string[];

  constructor() {
    this.name = 'Jack';
    this.description = 'Online shop for everyone';
    this.price = 2345;
    this.category = CategoryList.Computers;
    this.isAvailable = true;
  }
  onBuy(item): void {
    this.message = 'The goods were added';
    this.cart.push(item);
  }
}