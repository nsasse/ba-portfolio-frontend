import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main-frontend';

  public viewRiskAnalyse: boolean;
  public viewProductSearch: boolean;
  public viewPortfolioView: boolean;

  constructor() {
    this.viewRiskAnalyse = true;
    this.viewProductSearch = false;
    this.viewPortfolioView = false;
  }

  public riskProfileFinished() {
    this.viewRiskAnalyse = false;
    this.viewProductSearch = true;
    this.viewPortfolioView = true;
  }
}
