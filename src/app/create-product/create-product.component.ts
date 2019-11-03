import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  data: FormGroup;


  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
  }

  ngOnInit() {
    this.data = this.fb.group({
      name: '',
      price: '',
      description: '',
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
        this.router.navigate(['/home']);
      });
      console.log(this.data.value);
    }

}
