import { Component, effect, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProductsService } from '../../../products/services/products';
import { ProductCard } from '../../../products/components/product-card/product-card';
import { Pagination } from '../../../shared/components/pagination/pagination';


import { PaginationService } from '../../../shared/components/pagination/pagination.service';

@Component({
  selector: 'app-gender-page',
  imports: [ProductCard,Pagination],
  templateUrl: './gender-page.html',
  styleUrl: './gender-page.css',
})
export class GenderPage {


  aRoute = inject(ActivatedRoute);
   productService = inject(ProductsService);
   paginationService = inject(PaginationService);


  gender = toSignal( this.aRoute.params.pipe(
    map(({gender})=>gender)
  ) )


 productsResource = rxResource({
    stream: () => {
      const gender = this.gender();
      return this.productService.getProducts({
        gender,
        limit: 10,
        offset: (this.paginationService.currentPage() - 1) * 10,
      });
    },
  });

  // Effect que recarga cuando cambia el género O la página
  private reloadEffect = effect(() => {
    this.gender();
    this.paginationService.currentPage();
    this.productsResource.reload();
  });

  
}
