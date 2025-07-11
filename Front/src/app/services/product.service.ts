
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8090/products';

  private getAccessToken(): string | null {
    // Retrieve the access token from session storage
    return sessionStorage.getItem('access_token');
  }

  private createHeaders(): HttpHeaders {
    // Create headers with the access token
    const accessToken = this.getAccessToken();
    console.log("i ve take the access token" , accessToken)
    return new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
  }
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    const headers = this.createHeaders();
    return this.http.get<Product[]>(this.apiUrl, { headers });
  }

  getProductById(id: number): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, updatedProduct: Product): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Product>(url, updatedProduct);
  }

  deleteProduct(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
