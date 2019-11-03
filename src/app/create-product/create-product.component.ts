import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  data: FormGroup;
  message: string;



  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
  }

  ngOnInit() {
    this.data = this.fb.group({
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
  }
    addProduct() {
      this.productService.createProduct(this.data.value).subscribe(next => {
        this.message = 'Add Product Success';
        this.router.navigate(['/home']);
      });
      console.log(this.data.value);
    }

}
