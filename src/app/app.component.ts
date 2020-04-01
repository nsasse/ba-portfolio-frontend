import {Component} from '@angular/core';
import {PortfolioWeighting} from './models/portfolioweighting.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main-frontend';
  portfolioWeighting: PortfolioWeighting = null;

  viewRiskAnalyse: boolean;
  viewPortfolioView: boolean;

  constructor() {
    this.viewRiskAnalyse = true;
    this.viewPortfolioView = false;
  }

  public riskProfileFinished(portfolioWeightingParam: PortfolioWeighting) {
    this.portfolioWeighting = portfolioWeightingParam;
    this.viewRiskAnalyse = false;
    this.viewPortfolioView = true;
  }
}
