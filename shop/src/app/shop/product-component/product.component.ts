import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public message: string;
  @Input() public products: Product[];


  constructor() {}

  *ngOnInit() {
  }

  onBuy(): void {
    this.message = 'The goods were added';
    setTimeout(() => this.message = '', 2000);
  }
}
