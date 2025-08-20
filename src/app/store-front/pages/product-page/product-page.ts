import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../../products/services/products'
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCarousel } from "../../../products/components/product-carousel/product-carousel";


@Component({
  selector: 'app-product-page',
  imports: [ProductCarousel],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css'
})
export class ProductPage {

  activatesRoute = inject( ActivatedRoute )
  productService = inject( Products )



    idSlug = this.activatesRoute.snapshot.paramMap.get('idSlug')

      productResource = rxResource({
        params: () => ({ idSlug2: this.idSlug }),
        stream: ({ params }) =>
        this.productService.getProductByIdSlug(params.idSlug2!)
  });



}


