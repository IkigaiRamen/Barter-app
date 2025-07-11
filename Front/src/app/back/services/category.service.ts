import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:9091/category';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createCategory(category: any): Observable<any> {
    return this.http.post(this.apiUrl, category);
  }

  deleteCategory(categoryId: number): Observable<any> {
    const url = `${this.apiUrl}/${categoryId}`;
    return this.http.delete(url);
  }

  getCategory(categoryId: number): Observable<any> {
    const url = `${this.apiUrl}/${categoryId}`;
    return this.http.get(url);
  }

  updateCategory(categoryId: number, categoryData: any): Observable<any> {
    const url = `${this.apiUrl}/${categoryId}`;
    return this.http.put(url, categoryData);
  }
}
