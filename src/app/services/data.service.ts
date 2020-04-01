import {Injectable} from '@angular/core';
import {PortfolioWeighting} from '../models/portfolioweighting.enum';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private thePortfolioWeighting: PortfolioWeighting;
  private theClientId: bigint;

  constructor() {
  }

  get portfolioWeighting(): PortfolioWeighting {
    return this.thePortfolioWeighting;
  }

  set portfolioWeighting(value: PortfolioWeighting) {
    this.thePortfolioWeighting = value;
  }

  get clientId(): bigint {
    return this.theClientId;
  }

  set clientId(value: bigint) {
    this.theClientId = value;
  }
}
