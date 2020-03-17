import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class RiskServiceService {

  private url = 'http://localhost:8082/micro-advisor/portfolio-test';

  constructor(private http: HttpClient) {
  }

  getTest(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}

