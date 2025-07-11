// reviewsservice.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../Models/review';
@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private apiUrl = 'http://localhost:8090/reviews';

  constructor(private http: HttpClient) {}

  private getAccessToken(): string | null {
    // Retrieve the access token from session storage
    return sessionStorage.getItem('access_token');
  }

  private createHeaders(): HttpHeaders {
    // Create headers with the access token
    const accessToken = this.getAccessToken();
    return new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
  }

  getAllReviews(): Observable<Review[]> {
    const headers = this.createHeaders();
    return this.http.get<Review[]>(this.apiUrl, { headers });
  }

  getReviewById(id: number): Observable<Review> {
    const url = `${this.apiUrl}/${id}`;
    const headers = this.createHeaders();
    return this.http.get<Review>(url, { headers });
  }

  createReview(review: Review): Observable<Review> {
    const headers = this.createHeaders();
    return this.http.post<Review>(this.apiUrl, review, { headers });
  }

  updateReview(id: number, updatedReview: Review): Observable<Review> {
    const url = `${this.apiUrl}/${id}`;
    const headers = this.createHeaders();
    return this.http.put<Review>(url, updatedReview, { headers });
  }

  deleteReview(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    const headers = this.createHeaders();
    return this.http.delete<void>(url, { headers });
  }
}
