import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "./product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/${id}`);
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.API_URL}`);
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);

  }
  createProduct(post: Partial<IProduct>): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API_URL}/add`, post);
  }
  updateProduct(post: IProduct): Observable<IProduct> {
    console.log('ok');
    return this.http.put<IProduct>(`${this.API_URL}/${post.id}`, post);

  }
}
