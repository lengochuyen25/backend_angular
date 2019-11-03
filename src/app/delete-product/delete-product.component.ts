import { Component, OnInit } from '@angular/core';
import {IProduct} from "../product.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  product: IProduct;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
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
  deleteProduct(i: number) {
    this.productService.deleteProduct(i).subscribe( () => {
      this.router.navigate(['/home']);
    }, this.errorHandle );

  }
  errorHandle( error: any) {
    alert('Thao tac khong thanh');
  }

}
