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

  vertical2Error: boolean;
  vertical2Form = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.min(1)]),
  });
  vertical3Error: boolean;

  constructor(private readonly restService: RestService) {
    this.productForView = new Product(null, '', '', '', '', 0, 0, 0);
    this.vertical2Error = false;
    this.vertical3Error = false;
  }

  ngAfterViewInit(): void {
    this.vertical2Error = document.getElementById('buy-button') == null;
    console.log('V2 Error: ' + this.vertical2Error);
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
    this.restService.sendInterest(this.vertical2Form.value.mail)
      .subscribe(data => {
        console.log(this.vertical2Form.value.mail);
      });
  }
}
