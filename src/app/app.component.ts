import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main-frontend';

  viewRiskAnalyse: boolean;
  viewPortfolioView: boolean;
  viewUserDataView: boolean;

  constructor() {
    this.viewRiskAnalyse = true;
    this.viewPortfolioView = false;
  }

  public riskProfileFinished() {
    this.viewRiskAnalyse = false;
    this.viewPortfolioView = true;
  }

  public portfolioFinished(isFinished: boolean) {
    this.viewPortfolioView = false;
    this.viewUserDataView = isFinished;
  }
}
