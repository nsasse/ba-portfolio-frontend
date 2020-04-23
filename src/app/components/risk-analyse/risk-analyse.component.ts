import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ExpectedYield} from '../../models/expected-yield.enum';
import {RiskTolerance} from '../../models/risk-tolerance.enum';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RestService} from '../../services/rest.service';
import {RiskProfile} from '../../models/risk-profile.model';
import {PortfolioWeighting} from '../../models/portfolioweighting.enum';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-risk-analyse',
  templateUrl: './risk-analyse.component.html',
  styleUrls: ['./risk-analyse.component.scss'],
})
export class RiskAnalyseComponent implements OnInit {

  form = new FormGroup({
    duration: new FormControl('', [Validators.required, Validators.min(1)]),
    investmentValue: new FormControl('', [Validators.required, Validators.min(1)])
  });
  public expectedYield: ExpectedYield;
  public riskTolerance: RiskTolerance;
  public duration: number;
  public portfolioWeighting: PortfolioWeighting;

  @Output() riskProfileUploaded = new EventEmitter<null>();

  constructor(
    private readonly fb: FormBuilder,
    private readonly restService: RestService,
    private dataService: DataService
  ) {
    this.riskTolerance = RiskTolerance.LOW_RISK;
    this.expectedYield = ExpectedYield.OUTSTRIPPING_INFLATION;
    this.duration = null;
  }

  ngOnInit() {
  }

  get f() {
    return this.form.controls;
  }

  public changeRiskToleranceLow() {
    this.riskTolerance = RiskTolerance.LOW_RISK;
  }

  public changeRiskToleranceMid() {
    this.riskTolerance = RiskTolerance.MID_RISK;
  }

  public changeRiskToleranceHigh() {
    this.riskTolerance = RiskTolerance.HIGH_RISK;
  }

  public changeExpectedYieldLow() {
    this.expectedYield = ExpectedYield.OUTSTRIPPING_INFLATION;
  }

  public changeExpectedYieldMid() {
    this.expectedYield = ExpectedYield.BALANCED_YIELD;
  }

  public changeExpectedYieldHigh() {
    this.expectedYield = ExpectedYield.YIELD_FIRST;
  }

  public changeDuration() {
    this.duration = this.form.value.duration;
  }

  public changeInvestmentValue() {
    this.dataService.investmentValue = this.form.value.investmentValue;
  }

  public submitRiskProfile() {
    const riskProfile: RiskProfile = new RiskProfile(this.riskTolerance, this.expectedYield, this.duration);

    this.restService.sendRiskProfile(riskProfile).subscribe(
      data => {
        console.log('Data: ' + data);
        this.dataService.portfolioWeighting = PortfolioWeighting[data.toString()];
        this.riskProfileUploaded.emit();
      });
  }
}
