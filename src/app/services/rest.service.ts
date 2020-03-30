import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RiskProfile} from '../models/risk-profile';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// You have to unlock CORS in your browser with an addon!
export class RestService {

  constructor(private http: HttpClient) {
  }

  public getAllProductsForSearch(): Observable<any> {
    return this.http.get('http://localhost:8082/product/all/string');
  }

  public getProducts(): Observable<any> {
    return this.http.get('http://localhost:8082/product/all');
  }

  public sendRiskProfile(riskProfile: RiskProfile): Observable<any> {
    return this.http.post<any>('http://localhost:8082/portfolio/riskprofile', riskProfile);
  }
}
