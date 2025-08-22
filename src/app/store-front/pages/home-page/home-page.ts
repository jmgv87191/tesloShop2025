import { Component, inject } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { Products } from '../../../products/services/products';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductResponse } from '../../../products/interfaces/product.interface';
import { Pagination } from "../../../shared/components/pagination/pagination";
import { PaginationService } from '../../../shared/components/pagination/pagination.service';


type QueryParams = { limit?: number; gender?: string; page?: number; offset?: number };

@Component({
  selector: 'app-home-page',
  imports: [ProductCard, Pagination],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  private productsService = inject(Products);
  paginationService = inject(PaginationService)
/*   private activatedRoute = inject(ActivatedRoute);

  currentPage = toSignal(
    this.activatedRoute.queryParamMap.pipe(
      map(params => (params.get('page') ? +params.get('page')! : 1)),
      map(page => (isNaN(page) || page < 1 ? 1 : page)),
    ),
    { initialValue: 1 }
  ); */

  productResource = rxResource<ProductResponse, QueryParams>({
    params: () => {
      const limit = 9;
      const page = this.paginationService.currentPage();
      const offset = (page - 1) * limit;
      return { limit, gender: '', page, offset };
    },
    stream: ({ params }) => this.productsService.getProducts(params), 
  });
}
