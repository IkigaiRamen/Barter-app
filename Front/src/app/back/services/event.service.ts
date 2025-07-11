import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = 'http://localhost:8081/event';

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getEvent(eventId: number): Observable<any> {
    const url = `${this.apiUrl}/${eventId}`;
    return this.http.get(url);
  }

  createEvent(eventData: any): Observable<any> {
    return this.http.post(this.apiUrl, eventData);
  }

  updateEvent(eventId: number, updatedData: any): Observable<any> {
    const url = `${this.apiUrl}/${eventId}`;
    return this.http.put(url, updatedData);
  }

  deleteEvent(eventId: number): Observable<any> {
    const url = `${this.apiUrl}/${eventId}`;
    return this.http.delete(url);
  }
}
