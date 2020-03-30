import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RestService} from '../../services/rest.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  @Output() productSelected = new EventEmitter<string>();

  productNames: string[] = [''];
  filteredOptions: Observable<string[]>;
  formControl = new FormControl();

  constructor(private readonly restService: RestService) {
    this.getProductNamesForSearch();
  }

  ngOnInit(): void {
    this.filteredOptions = this.formControl.valueChanges
      .pipe(
        startWith('Suchen...'),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.productNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  public productSelectedForView() {
    this.productSelected.emit(this.formControl.value);
  }

  public getProductNamesForSearch() {
    this.restService.getAllProductsForSearch()
      .subscribe(data => {
        this.productNames = data;
      });
  }

  // TEST
  // public getProducts() {
  //
  //   this.restService.getProducts()
  //     .subscribe(data => {
  //       for (const d of (data as any)) {
  //         this.products.push({
  //           id: d.id,
  //           isin: d.isin,
  //           name: d.name,
  //           productType: d.productType,
  //           region: d.region,
  //           indexLevel: d.indexLevel,
  //           performanceTotal: d.performanceTotal,
  //           performanceThisYear: d.performanceThisYear
  //         });
  //       }
  //       console.log(this.products);
  //     });
  // }
}
