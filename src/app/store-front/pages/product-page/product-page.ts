import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../../products/services/products'


@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css'
})
export class ProductPage {

  activatesRoute = inject( ActivatedRoute )
  productService = inject( Products )


  constructor(){

    const idSlug = this.activatesRoute.snapshot.paramMap.get('idSlug')

    // this.getProduct( idSlug! )

  }

/*   getProduct( slug:string ){
    this.productService.getProductByIdSlug( slug ).subscribe((data)=>{
      console.log(data)
    })
  } */

}
