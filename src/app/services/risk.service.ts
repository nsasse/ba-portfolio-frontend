import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {RiskProfile} from '../models/risk-profile';

@Injectable({
  providedIn: 'root'
})
export class RiskService {

  private urlHost = 'localhost:8082';

  constructor(private http: HttpClient) {
  }

  /*TODO - NOT WORKING*/
  public uploadRiskProfile(riskProfile: RiskProfile): Observable<string> {
    const url = 'http://localhost:8082/portfolio/api/risk?id';
    console.log(url);
    console.log(riskProfile);
    console.log('Send to Backend...');
    return this.http.post<string>(url, 'test');
  }
}

