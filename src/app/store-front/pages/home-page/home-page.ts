import { Component, inject } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { Products } from '../../../products/services/products';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductResponse } from '../../../products/interfaces/product.interface';

@Component({
  selector: 'app-home-page',
  imports: [ProductCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  
  private productsService = inject(Products);

  productResource = rxResource<ProductResponse, { limit?: number; gender?: string }>({
    params: () => ({ limit: 9, gender: 'women' }),
    stream: ({ params }) => this.productsService.getProducts(params),
  });
}
