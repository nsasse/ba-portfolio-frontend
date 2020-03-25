import {Component, OnInit} from '@angular/core';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  products: any = [];

  constructor(private readonly restService: RestService) {

  }

  ngOnInit(): void {
  }


  public getProducts() {

    this.restService.getProducts()
      .subscribe(data => {
        for (const d of (data as any)) {
          this.products.push({
            id: d.id,
            isin: d.isin,
            name: d.name,
            productType: d.productType,
            region: d.region,
            indexLevel: d.indexLevel,
            performanceTotal: d.performanceTotal,
            performanceThisYear: d.performanceThisYear
          });
        }
        console.log(this.products);
      });

  }
}
