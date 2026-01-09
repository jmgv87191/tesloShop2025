import { Component, effect, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProductsService } from '../../../products/services/products';
import { ProductCard } from '../../../products/components/product-card/product-card';

@Component({
  selector: 'app-gender-page',
  imports: [ProductCard],
  templateUrl: './gender-page.html',
  styleUrl: './gender-page.css',
})
export class GenderPage {


  aRoute = inject(ActivatedRoute);
  private productService = inject(ProductsService);


  gender = toSignal( this.aRoute.params.pipe(
    map(({gender})=>gender)
  ) )

  productResource = rxResource({
    stream: () => {
      const gender = this.gender();
      return this.productService.getProducts({gender});
    }
  });

  private reloadOnGenderChange = effect(() => {
    this.gender();               
    this.productResource.reload();
  }); 

}
