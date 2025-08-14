import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../products/interfaces/product.interface';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [ RouterLink, SlicePipe ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  product = input.required<Product>();



}
