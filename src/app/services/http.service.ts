import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/data.json')
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.http.get<Product[]>('/assets/data.json').pipe(map(products => products.find(product => product.id === id)));
  }
}
