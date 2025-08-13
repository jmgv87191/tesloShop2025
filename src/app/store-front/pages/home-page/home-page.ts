import { Component, inject } from '@angular/core';
import { ProductCard } from "../../components/product-card/product-card";
import { Products } from '../../../products/services/products'
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductResponse } from '../../../products/interfaces/product.interface';
import { count } from 'rxjs';

@Component({
  selector: 'app-home-page',
  imports: [ProductCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})

export class HomePage {

  productsService = inject(Products)

  productsArray: ProductResponse  = { count:0, pages:0, products:[] }

  productsResource = this.productsService.getProducts({}).subscribe((data)=>{
    this.productsArray = data;
    console.log(this.productsArray)
  }) 


/*   productResource = rxResource<any[], void >({
    stream: (   )=>(),
    loader:({ })=>{
      return this.productsService.getProducts()
    }

  }) */

}
