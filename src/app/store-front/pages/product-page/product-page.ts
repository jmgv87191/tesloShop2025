import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../products/services/products';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {


  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductsService);
  productIdSlug: string = this.activatedRoute.snapshot.params['idSlug'];


  productResource = rxResource({
    stream:()=> {
      console.log(this.productService.getProduct( this.productIdSlug ));
      return this.productService.getProduct( this.productIdSlug )
    }
  })
}