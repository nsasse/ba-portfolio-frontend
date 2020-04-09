import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RiskProfile} from '../models/risk-profile.model';
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

  public sendRiskProfile(riskProfile: RiskProfile): Observable<any> {
    return this.http.post<any>('http://localhost:8082/portfolio/riskprofile', riskProfile);
  }

  public getProductByName(productName: string): Observable<any> {
    return this.http.get('http://localhost:8082/product/by/name', {
      params: {search: productName}
    });
  }
}
