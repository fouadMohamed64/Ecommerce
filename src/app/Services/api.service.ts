import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { Icategory } from '../Models/icategory';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }


  getAllProducts():Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/products`)
  }

  getProductByID(id:number):Observable<Iproduct>{
    return this.httpClient.get<Iproduct>(`${environment.baseUrl}/products/${id}`)
  }

  getProductsByCatID(catID:number):Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/products?catID=${catID}`)
  }

  addNewProduct(prd:Iproduct):Observable<Iproduct>{
    return this.httpClient.post<Iproduct>(`${environment.baseUrl}/products`, JSON.stringify(prd), {
      headers: {
        // 'authorization': 'lksdfjlsdkfjl;lajf'
        'content-type': 'application/json'
      }
    }).pipe((
      retry(2),
      catchError((error:HttpErrorResponse)=>{
        return throwError(()=>{
          return new Error('Error in add new Product.....')
        })
      })
    ))
  }

}
