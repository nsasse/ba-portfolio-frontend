import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {PortfolioWeighting} from '../../models/portfolioweighting.enum';
import {DataService} from '../../services/data.service';

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
      case PortfolioWeighting.ADVISOR_50:
        this.investmentListVisible = true;
        this.sharesListVisible = true;
        this.moneyMarketListVisible = false;
        return;
      case PortfolioWeighting.ADVISOR_75:
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

  public getProductWeightingQuotesFromDataService(arrayNumber: number): number {
    console.log('Array:' + arrayNumber);
    console.log(this.dataService.productWeightingQuotes[arrayNumber]);
    return this.dataService.productWeightingQuotes[arrayNumber];
  }

  public getProductValue(numberOfProducts: number, quote: number): number {
    return Math.round(((this.dataService.investmentValue * (quote / 100) / numberOfProducts) + Number.EPSILON) * 100) / 100;
  }

  public deleteProduct(arrayNumber: number, isin: string): void {
    switch (arrayNumber) {
      case 0:
        this.investmentList = this.investmentList.filter(product => !product.isin.match(isin));
        return;
      case 1:
        this.sharesList = this.sharesList.filter(product => !product.isin.match(isin));
        return;
      case 2:
        this.bondList = this.bondList.filter(product => !product.isin.match(isin));
        return;
      case 3:
        this.moneyMarketList = this.moneyMarketList.filter(product => !product.isin.match(isin));
        return;
      case 4:
        this.commodityList = this.commodityList.filter(product => !product.isin.match(isin));
        return;
    }
  }

  public getAllProducts(): string[] {
    let products: Product[] = [];
    let isins: string[] = [];
    products = products.concat(this.investmentList);
    products = products.concat(this.sharesList);
    products = products.concat(this.bondList);
    products = products.concat(this.moneyMarketList);
    products = products.concat(this.commodityList);

    isins = products.map(filterProducts => filterProducts.isin);
    return isins;
  }
}
