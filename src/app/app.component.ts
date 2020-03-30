import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main-frontend';

  public viewRiskAnalyse: boolean;
  public viewPortfolioView: boolean;

  constructor() {
    this.viewRiskAnalyse = true;
    this.viewPortfolioView = false;
  }

  public riskProfileFinished() {
    this.viewRiskAnalyse = false;
    this.viewPortfolioView = true;
  }
}
