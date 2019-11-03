import { Component, OnInit } from '@angular/core';
import {IProduct} from "../product.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: IProduct;
  data: FormGroup;
  message: string;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.data = this.fb.group({
      id: '',
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      author: this.fb.group({
        id: '14',
        name: 'Yann Martel'
      }),
      img: 'ngaymai.jpg'
    })
    ;


    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getById(id).subscribe(
      next => {
        this.product = next;
        this.data.patchValue(this.product);
      },
      error => {
        console.log(error);
        this.product = null;
      }
    );
  }
  editProduct() {
    this.productService.updateProduct(this.data.value).subscribe(next => {

      this.message = 'Update success';
    });
  }

}
