import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductResponse } from '../interfaces/product.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Products {
  
  private http = inject( HttpClient )

getProducts():Observable<ProductResponse> {

  return this.http.get<ProductResponse>('http://localhost:3000/api/products')
                  .pipe( tap((resp)=>console.log(resp)) )

}

}
