import { Component, inject } from '@angular/core';
import { ProductCard } from "../../../products/components/product-card/product-card";
import { ProductsService } from '../../../products/services/products';
import { rxResource } from '@angular/core/rxjs-interop'


@Component({
  selector: 'app-home-page',
  imports: [ProductCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  productService: ProductsService = inject(ProductsService)

  productResoruce = rxResource({
    stream:()=> this.productService.getProducts( {} )
    
  })


}
