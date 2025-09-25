import { Component, input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { productImagePipe } from '../../pipes/product-image.pipe';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-table',
  imports: [productImagePipe, RouterLink, CurrencyPipe],
  templateUrl: './product-table.html',
  styleUrl: './product-table.css'
})
export class ProductTable {


  products = input.required<Product[]>();

}
