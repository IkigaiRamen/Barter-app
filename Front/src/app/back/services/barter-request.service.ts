import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BarterRequestService {

  private apiUrl = 'http://localhost:8082/barterRequest';
  constructor(private http: HttpClient) { }

  getAllBarterRequests(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  createBarterRequest(barterRequest: any): Observable<any> {
    return this.http.post(this.apiUrl, barterRequest);
  }
  deleteBarterRequest(requestId: number): Observable<any> {
    const url = `${this.apiUrl}/${requestId}`;
    return this.http.delete(url);
  }
  getBarterRequest(requestId: number): Observable<any> {
    const url = `${this.apiUrl}/${requestId}`;
    return this.http.get(url);
  }

  // Update a barter request by its ID
  updateBarterRequest(requestId: number, requestData: any): Observable<any> {
    const url = `${this.apiUrl}/${requestId}`;
    return this.http.put(url, requestData);
  }
}
