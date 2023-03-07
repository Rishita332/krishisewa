import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ProductModelServer, serverResponse} from "../models/products.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private url = environment.serverURL;
  constructor(private http: HttpClient, 
              private router: Router) { }
  
              getAllProducts(limitOfResults=22):Observable<serverResponse> {
                return this.http.get<serverResponse>(this.url + 'products', {
                  params: {
                    limit: limitOfResults.toString()
                  }
                });
              }
              getSingleProduct(id: Number): Observable<ProductModelServer> {
                return this.http.get<ProductModelServer>(this.url + 'products/' + id);
              }
              getProductsFromCategory(catName: String): Observable<ProductModelServer[]> {
                return this.http.get<ProductModelServer[]>(this.url + 'products/category/' + catName);
              }
}
