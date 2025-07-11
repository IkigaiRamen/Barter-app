import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private apiUrl = 'http://localhost:9091/annonces';

  constructor(private http: HttpClient) { }

  getAllAnnonces(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createAnnonce(annonce: any): Observable<any> {
    return this.http.post(this.apiUrl, annonce);
  }

  deleteAnnonce(annonceId: number): Observable<any> {
    const url = `${this.apiUrl}/${annonceId}`;
    return this.http.delete(url);
  }

  getAnnonce(annonceId: number): Observable<any> {
    const url = `${this.apiUrl}/${annonceId}`;
    return this.http.get(url);
  }

  updateAnnonce(annonceId: number, annonceData: any): Observable<any> {
    const url = `${this.apiUrl}/${annonceId}`;
    return this.http.put(url, annonceData);
  }
}
