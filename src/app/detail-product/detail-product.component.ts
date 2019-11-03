import { Component, OnInit } from '@angular/core';
import {IProduct} from "../product.interface";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product: IProduct;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getById(id).subscribe(
      next => (this.product = next),
      error => {
        console.log(error);
        this.product = null;
      }
    );
  }
}
