import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class NewsService {
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}


  scrapeNews(): Observable<any> {
    return this.http.get(`${this.baseUrl}/scrape`);
  }
}
