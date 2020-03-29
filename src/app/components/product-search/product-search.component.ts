import {Component, OnInit} from '@angular/core';
import {RestService} from '../../services/rest.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  products: any[] = [];
  productNames: string[] = [];
  filteredOptions: Observable<string[]>;

  form = new FormGroup({
    search: new FormControl('')
  });

  constructor(private readonly restService: RestService) {
    this.getProductNamesForSearch();
  }

  ngOnInit(): void {
    this.filteredOptions = this.form.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.productNames.filter(option => option.toLowerCase().includes(filterValue));
  }


  public getProductNamesForSearch() {

    this.restService.getAllProductsForSearch()
      .subscribe(data => {
        for (const p of (data as string)) {
          this.productNames.push();
        }
        console.log(this.productNames);
      });

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
