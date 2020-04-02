import {Injectable} from '@angular/core';
import {PortfolioWeighting} from '../models/portfolioweighting.enum';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private thePortfolioWeighting: PortfolioWeighting;
  private theProductWeightingQuotes: number[];
  private theClientId: bigint;
  private theInvestmentValue: number;

  constructor() {
  }

  get portfolioWeighting(): PortfolioWeighting {
    return this.thePortfolioWeighting;
  }

  set portfolioWeighting(value: PortfolioWeighting) {
    this.theProductWeightingQuotes = [];
    this.thePortfolioWeighting = value;
    switch (value) {
      case PortfolioWeighting.ADVISOR_0:
        this.theProductWeightingQuotes.push(0, 0, 80, 10, 10);
        return;
      case PortfolioWeighting.ADVISOR_25:
        this.theProductWeightingQuotes.push(10, 15, 60, 5, 10);
        return;
      case PortfolioWeighting.ADVISOR_50:
        this.theProductWeightingQuotes.push(20, 30, 40, 0, 10);
        return;
      case PortfolioWeighting.ADVISOR_75:
        this.theProductWeightingQuotes.push(25, 50, 20, 0, 5);
        return;
    }
  }

  get clientId(): bigint {
    return this.theClientId;
  }

  set clientId(value: bigint) {
    this.theClientId = value;
  }


  get investmentValue(): number {
    return this.theInvestmentValue;
  }

  set investmentValue(value: number) {
    this.theInvestmentValue = value;
  }


  get productWeightingQuotes(): number[] {
    return this.theProductWeightingQuotes;
  }

  set productWeightingQuotes(value: number[]) {
    this.theProductWeightingQuotes = value;
  }
}
