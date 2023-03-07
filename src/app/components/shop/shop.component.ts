import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {ProductModelServer, serverResponse} from "../../models/products.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: ProductModelServer[] = [];
  constructor(private productService: ProductService,
              private router:Router) { }

 ngOnInit(): void {
    this.productService.getAllProducts().subscribe((prods: serverResponse) => {
      this.products = prods.products;
      console.log(this.products);
  });
  }}
   /*
  ngOnInit(): void {
  this.productService.getProductsFromCategory('seeds').subscribe((prods: ProductModelServer[]) =>{
    this.products = prods;
    console.log(this.products);
  });
}}*/
