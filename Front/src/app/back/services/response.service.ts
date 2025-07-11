import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  private apiUrl = 'http://localhost:8082/response';

  constructor(private http: HttpClient) { }

  getAllResponses(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getResponse(responseId: number): Observable<any> {
    const url = `${this.apiUrl}/${responseId}`;
    return this.http.get(url);
  }

  createResponse(responseData: any): Observable<any> {
    return this.http.post(this.apiUrl, responseData);
  }

  updateResponse(responseId: number, updatedData: any): Observable<any> {
    const url = `${this.apiUrl}/${responseId}`;
    return this.http.put(url, updatedData);
  }

  deleteResponse(responseId: number): Observable<any> {
    const url = `${this.apiUrl}/${responseId}`;
    return this.http.delete(url);
  }
}
