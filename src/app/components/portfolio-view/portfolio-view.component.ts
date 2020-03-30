import {Component, OnInit} from '@angular/core';
import {RestService} from '../../services/rest.service';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.scss']
})
export class PortfolioViewComponent implements OnInit {

  productForView: Product;

  constructor(private readonly restService: RestService) {
    this.productForView = new Product(null, '', '', '', '', 0, 0, 0);
  }

  ngOnInit(): void {
  }


  public getProductByName(productName: string) {
    console.log(productName);
    this.restService.getProductByName(productName)
      .subscribe(data => {
        this.productForView.id = data.id;
        this.productForView.isin = data.isin;
        this.productForView.name = data.name;
        this.productForView.productType = data.productType;
        this.productForView.region = data.region;
        this.productForView.indexLevel = data.indexLevel;
        this.productForView.performanceTotal = data.performanceTotal;
        this.productForView.performanceThisYear = data.performanceThisYear;
      });
    console.log(this.productForView);
  }

}
