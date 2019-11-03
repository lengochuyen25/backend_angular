import { Component, OnInit } from '@angular/core';
import {IProduct} from "../product.interface";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  output: IProduct[];
  info: IProduct;

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(next => {
      this.output = next;
    });
  }

  ngOnInit() {
  }

}
