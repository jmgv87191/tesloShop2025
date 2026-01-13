import { Component, effect, inject } from '@angular/core';
import { ProductCard } from "../../../products/components/product-card/product-card";
import { ProductsService } from '../../../products/services/products';
import { rxResource, toSignal } from '@angular/core/rxjs-interop'
import { Pagination } from "../../../shared/components/pagination/pagination";
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { PaginationService } from '../../../shared/components/pagination/pagination.service';


@Component({
  selector: 'app-home-page',
  imports: [ProductCard, Pagination],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  productService: ProductsService = inject(ProductsService)
  paginationService = inject(PaginationService)
/*   activatedRoute = inject(ActivatedRoute);

  currentPage = toSignal(
    this.activatedRoute.queryParamMap.pipe(
      map( params => (params.get('page')? +params.get('page')!:1  ) ),
      map( page => (isNaN(page) ? 1 : page  ) )
    ),
    {
      initialValue: 1,

    }
  ) */

productsResource = rxResource({
    stream: () => this.productService.getProducts({
        limit: 10,
        offset: (this.paginationService.currentPage() - 1) * 10, 
    })
});

constructor() {
  effect(() => {
    this.paginationService.currentPage();    
    this.productsResource.reload();
  });
}



}
