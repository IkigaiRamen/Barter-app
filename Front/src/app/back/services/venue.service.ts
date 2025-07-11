import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  private apiUrl = 'http://localhost:8081/venue';

  constructor(private http: HttpClient) { }

  getAllVenues(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getVenue(venueId: number): Observable<any> {
    const url = `${this.apiUrl}/${venueId}`;
    return this.http.get(url);
  }

  createVenue(venueData: any): Observable<any> {
    return this.http.post(this.apiUrl, venueData);
  }

  updateVenue(venueId: number, updatedData: any): Observable<any> {
    const url = `${this.apiUrl}/${venueId}`;
    return this.http.put(url, updatedData);
  }

  deleteVenue(venueId: number): Observable<any> {
    const url = `${this.apiUrl}/${venueId}`;
    return this.http.delete(url);
  }
}
