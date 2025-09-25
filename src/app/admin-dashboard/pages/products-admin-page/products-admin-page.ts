import { Component } from '@angular/core';
import { ProductTable } from '../../../products/components/product-table/product-table';

@Component({
  selector: 'app-products-admin-page',
  imports: [ProductTable],
  templateUrl: './products-admin-page.html',
  styleUrl: './products-admin-page.css'
})
export class ProductsAdminPage {

}
