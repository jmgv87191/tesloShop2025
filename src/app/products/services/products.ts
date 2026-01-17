import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductsResponse, Product } from '../interfaces/product';
import { count, delay, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

const baseUrl = environment.baseUrl

interface Options{
  limit?: number;
  offset?:number;
  gender?:string;
  page?: number;

}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private http = inject(HttpClient);
  private productsCache = new Map<string, ProductsResponse >();
  private productCache = new Map<string, Product >();

  getProducts( options: Options ):Observable<ProductsResponse>{

    const {limit = 9, offset= 0, gender = ''} = options
    const key = `${limit}-${offset}-${gender}`

    if (this.productsCache.has(key)) {
      return of ( this.productsCache.get(key)! )
    }

    return this.http.get<ProductsResponse>( `${baseUrl}/products`,{
      params:{
        limit,
        offset,
        gender
      }
    })
    .pipe(
      tap((resp)=>{console.log(resp)}),
      tap((resp)=> this.productsCache.set(key,resp) )
    
    )

  }

  getProduct( idSlug:string ):Observable<Product>{

    if (this.productCache.has(idSlug)) {
        return of (this.productCache.get(idSlug)!);
    }

    return this.http.get<Product>( `${baseUrl}/products/${idSlug}`)
    .pipe(
      delay(2000),
      tap((resp)=> this.productCache.set(idSlug,resp)  ))
  }
  
}
