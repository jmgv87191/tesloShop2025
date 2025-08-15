import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../products/interfaces/product.interface';
import { SlicePipe } from '@angular/common';
import { productImagePipe } from '../../../products/pipes/product-image.pipe';

@Component({
  selector: 'app-product-card',
  imports: [ RouterLink, SlicePipe, productImagePipe ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  product = input.required<Product>();

  imageUrl = computed(()=>{
    return  `http://localhost:3000/api/files/product/${ this.product().images[0] }`
  })

 
}
