import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Products } from '../../../products/services/products';
import { ProductResponse } from '../../../products/interfaces/product.interface';
import { ProductCard } from '../../components/product-card/product-card';
import { PaginationService } from '../../../shared/components/pagination/pagination.service';
import { Pagination } from "../../../shared/components/pagination/pagination";

type QueryParams = { limit?: number; gender?: string; page?: number; offset?: number };



@Component({
  selector: 'app-gender-page',
  imports: [ProductCard, Pagination],
  templateUrl: './gender-page.html',
  styleUrl: './gender-page.css'
})
export class GenderPage {

  route = inject( ActivatedRoute )
  private productsService = inject(Products);
  paginationService = inject(PaginationService)

  gender = toSignal(
    this.route.params.pipe(
      map( ({ gender })=> gender )
    )
  )

  productResource = rxResource<ProductResponse, QueryParams>({
    params: () => {
      const limit = 9;
      const page = this.paginationService.currentPage();
      const offset = (page - 1) * limit;
      return { limit, gender: this.gender(), page, offset };
    },
    stream: ({ params }) => this.productsService.getProducts(params), 
  });

}
