import {Component, OnInit} from '@angular/core';
import {ExpectedYield} from '../../models/expected-yield.enum';
import {RiskTolerance} from '../../models/risk-tolerance.enum';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RestService} from '../../services/rest.service';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-risk-analyse',
  templateUrl: './risk-analyse.component.html',
  styleUrls: ['./risk-analyse.component.scss'],
})
export class RiskAnalyseComponent implements OnInit {

  public formGroup: FormGroup;
  public expectedYield: ExpectedYield;
  public riskTolerance: RiskTolerance;
  public duration: number;

  products: [Product];

  constructor(
    private readonly fb: FormBuilder,
    private readonly restService: RestService
  ) {
  }

  ngOnInit() {
    this.formGroup = this.getDataFormGroup(this.duration);
    this.riskTolerance = RiskTolerance.NO_RISK;
    this.expectedYield = ExpectedYield.OUTSTRIPPING_INTEREST;
    this.duration = null;
  }

  public getDataFormGroup(durationParameter: number) {
    return this.fb.group({
      duration: [durationParameter, [
        /*Validator*/
      ]]
    });
  }

  public submitRiskProfile() {
    console.log(this.riskTolerance);
    console.log(this.duration);
    // this.restService.uploadRiskProfile(riskProfile);
    // const riskProfile: RiskProfile = new RiskProfile(this.riskTolerance.toString(), this.expectedYield.toString(), this.duration)

    this.restService.getProducts()
      .subscribe(data => {
        for (const d of (data as any)) {
          this.products.push({
            id: d.id,
            isin: d.isin,
            name: d.name,
            productType: d.productType.type,
            region: d.region.name,
            indexLevel: d.indexLevel,
            performanceTotal: d.performanceTotal,
            performanceThisYear: d.performanceThisYear
          });
        }
        console.log(this.products);
      });
  }
}
