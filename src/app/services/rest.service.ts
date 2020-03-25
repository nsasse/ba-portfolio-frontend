import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// You have to unlock CORS in your browser with an addon!
export class RestService {

  constructor(private http: HttpClient) {
  }

  public getProducts() {
    return this.http.get('http://localhost:8082/product/all');
  }
}
