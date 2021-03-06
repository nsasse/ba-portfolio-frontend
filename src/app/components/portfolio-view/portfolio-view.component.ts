import {AfterViewInit, Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {RestService} from '../../services/rest.service';
import {Product} from '../../models/product.model';
import {PortfolioListComponent} from '../portfolio-list/portfolio-list.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.scss'],
})
export class PortfolioViewComponent implements AfterViewInit {

  @ViewChild(PortfolioListComponent) portfolioListComponent: PortfolioListComponent;
  productForView: Product;

  @Output() portfolioIsFinished = new EventEmitter<boolean>();

  verticalOrderError: boolean;
  verticalOrderForm = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
  });

  verticalRecommendationError: boolean;

  constructor(private readonly restService: RestService) {
    this.productForView = new Product(null, '', '', '', '', 0, 0, 0);
    this.verticalOrderError = false;
    this.verticalRecommendationError = false;
    this.checkOptimizerConnection();
  }

  ngAfterViewInit(): void {
    this.verticalOrderError = document.getElementById('buy-button') == null;
  }

  public getProductByName(productName: string): void {
    this.restService.getProductByName(productName)
      .subscribe(data => {
        this.productForView.id = data.id;
        this.productForView.isin = data.isin;
        this.productForView.name = data.name;
        this.productForView.productType = data.productType.type;
        this.productForView.region = data.region.name;
        this.productForView.indexLevel = data.indexLevel;
        this.productForView.performanceTotal = data.performanceTotal;
        this.productForView.performanceThisYear = data.performanceThisYear;
      });
  }

  public addProductToPortfolio(): void {
    this.portfolioListComponent.addProductToPortfolio(new Product(this.productForView.id, this.productForView.isin,
      this.productForView.name, this.productForView.productType, this.productForView.region,
      this.productForView.indexLevel, this.productForView.performanceTotal, this.productForView.performanceThisYear));
  }

  public finishPortfolio(): void {
    this.restService.sendPortfolioProducts(this.portfolioListComponent.getAllProducts())
      .subscribe(data => {
        console.log(this.portfolioListComponent.getAllProducts());
      });
    this.portfolioIsFinished.emit(true);
  }

  public sendInterest(): void {
    this.restService.sendInterest(this.verticalOrderForm.value.mail)
      .subscribe(data => {
      });
  }

  public checkOptimizerConnection(): void {
    this.restService.checkOptimizerConnection().subscribe(data => {
    }, error => {
      if (error.status !== 200) {
        this.verticalRecommendationError = true;
      }
    });
  }

  public checkProductToPortfolio(): void {
    const productToPortfolio: Product = new Product(null, null, null, null, null, null, null, null);
    setTimeout(() => {
      this.restService.checkProductToPortfolio().subscribe(data => {
        if (data != null) {
          productToPortfolio.id = data.id;
          productToPortfolio.isin = data.isin;
          productToPortfolio.name = data.name;
          productToPortfolio.productType = data.productType.type;
          productToPortfolio.region = data.region.name;
          productToPortfolio.indexLevel = data.indexLevel;
          productToPortfolio.performanceTotal = data.performanceTotal;
          productToPortfolio.performanceThisYear = data.performanceThisYear;
          this.portfolioListComponent.addProductToPortfolio(productToPortfolio);
        }
      });
    }, 5000);
  }
}
