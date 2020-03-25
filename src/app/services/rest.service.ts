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

  public sendSearchString(searchString: string) {
    return this.http.post('http://localhost:8082/product/search', searchString);
  }

  public getProducts() {
    return this.http.get('http://localhost:8082/product/all');
  }

  public sendRiskProfile(riskProfile: RiskProfile): Observable<any> {
    // console.log(JSON.stringify(riskProfile));
    const test = 'testing';
    return this.http.post<any>('http://localhost:8082/portfolio/riskprofile', test);
  }
}

