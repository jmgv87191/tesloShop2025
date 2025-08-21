import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Products } from '../../../products/services/products';
import { ProductResponse } from '../../../products/interfaces/product.interface';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  selector: 'app-gender-page',
  imports: [ ProductCard ],
  templateUrl: './gender-page.html',
  styleUrl: './gender-page.css'
})
export class GenderPage {

  route = inject( ActivatedRoute )
  private productsService = inject(Products);

  gender = toSignal(
    this.route.params.pipe(
      map( ({ gender })=> gender )
    )
  )


  productResource = rxResource<ProductResponse, { limit?: number; gender?: string }>({
    params: () => ({ limit: 9, gender: this.gender() }),
    stream: ({ params }) => this.productsService.getProducts(params),
  });

}
