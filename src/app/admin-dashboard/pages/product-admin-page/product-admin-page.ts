import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductResponse } from '../../../products/interfaces/product.interface';
import { Products } from '../../../products/services/products';
import { PaginationService } from '../../../shared/components/pagination/pagination.service';

type QueryParams = { limit?: number; gender?: string; page?: number; offset?: number };


@Component({
  selector: 'app-product-admin-page',
  imports: [],
  templateUrl: './product-admin-page.html',
  styleUrl: './product-admin-page.css'
})
export class ProductAdminPage {
  
  private productsService = inject(Products);
  paginationService = inject(PaginationService)


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
