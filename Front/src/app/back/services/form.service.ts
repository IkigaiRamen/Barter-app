import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private apiUrl = 'http://localhost:8091/forms';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  add(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
  edit(formId: number, formData: any): Observable<any> {
    const editUrl = `${this.apiUrl}/${formId}`;
    return this.http.put(editUrl, formData);
  }
  delete(formId: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${formId}`;
    return this.http.delete(deleteUrl);
  }

  getById(formId: number): Observable<any> {
    const getUrl = `${this.apiUrl}/${formId}`;
    return this.http.get(getUrl);
  }
  
      
}
