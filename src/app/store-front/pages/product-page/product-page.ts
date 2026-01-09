import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../products/services/products';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCarousel } from "../../../products/components/product-carousel/product-carousel";

@Component({
  selector: 'app-product-page',
  imports: [ProductCarousel],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {


  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductsService);
  productIdSlug: string = this.activatedRoute.snapshot.params['idSlug'];


  productResource = rxResource({
    stream:()=> {
      return this.productService.getProduct( this.productIdSlug )
    }
  })
}