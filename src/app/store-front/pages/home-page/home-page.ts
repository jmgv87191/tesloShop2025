import { Component, inject } from '@angular/core';
import { ProductCard } from "../../components/product-card/product-card";
import { Products } from '../../../products/services/products'
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home-page',
  imports: [ProductCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})

export class HomePage {

  productsService = inject(Products)

  productsResource = this.productsService.getProducts().subscribe((data)=>{
    console.log(data)
  })

}
