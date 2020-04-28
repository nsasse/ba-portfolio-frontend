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

  public sendPortfolioProducts(isins: string[]): Observable<any> {
    return this.http.post<any>('http://localhost:8082/portfolio/products', isins);
  }

  public sendInterest(mail: string): Observable<any> {
    return this.http.post<any>('http://localhost:8082/portfolio/interest', mail);
  }

  public checkOptimizerConnection(): Observable<any> {
    return this.http.get<any>('http://localhost:8083/optimizer_war_exploded/index.xhtml');
  }

  public checkProductToPortfolio(): Observable<any> {
    return this.http.post<any>('http://localhost:8082/portfolio/check-product', null);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      return error.status;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
  }
}
