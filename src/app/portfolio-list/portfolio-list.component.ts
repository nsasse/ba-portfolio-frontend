import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product.model';
import {PortfolioWeighting} from '../models/portfolioweighting.enum';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {

  investmentListVisible: boolean;
  sharesListVisible: boolean;
  bondListVisible = true;
  moneyMarketListVisible: boolean;
  commodityListVisible = true;

  investmentList: Product[];
  sharesList: Product[];
  bondList: Product[];
  moneyMarketList: Product[];
  commodityList: Product[];

  constructor(private dataService: DataService) {
    this.investmentList = [];
    this.sharesList = [];
    this.bondList = [];
    this.moneyMarketList = [];
    this.commodityList = [];

    this.initTableView(dataService.portfolioWeighting);
  }

  ngOnInit(): void {
  }

  private initTableView(portfolioWeighting: PortfolioWeighting) {
    switch (portfolioWeighting) {
      case PortfolioWeighting.ADVISOR_0:
        this.investmentListVisible = false;
        this.sharesListVisible = false;
        this.moneyMarketListVisible = true;
        return;
      case PortfolioWeighting.ADVISOR_25:
        this.investmentListVisible = true;
        this.sharesListVisible = true;
        this.moneyMarketListVisible = true;
        return;
      case PortfolioWeighting.ADVISOR_50 || PortfolioWeighting.ADVISOR_75:
        this.investmentListVisible = true;
        this.sharesListVisible = true;
        this.moneyMarketListVisible = false;
        return;
    }
  }

  public addProductToPortfolio(product: Product) {
    switch (product.productType) {
      case 'Investment-Themen':
        return this.investmentList.push(product);
      case 'Aktienfonds':
        return this.sharesList.push(product);
      case 'Anleihenfonds':
        return this.bondList.push(product);
      case 'Geldmarktfonds':
        return this.moneyMarketList.push(product);
      case 'Rohstoffe':
        return this.commodityList.push(product);
    }
  }
}
