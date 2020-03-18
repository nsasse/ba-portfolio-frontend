import {Component, OnInit} from '@angular/core';
import {ExpectedYield} from '../../models/expected-yield.enum';
import {RiskTolerance} from '../../models/risk-tolerance.enum';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RiskService} from '../../services/risk.service';
import {RiskProfile} from '../../models/risk-profile';


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

  constructor(
    private readonly fb: FormBuilder,
    private readonly riskService: RiskService
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
    const riskProfile: RiskProfile = new RiskProfile(this.riskTolerance.toString(), this.expectedYield.toString(), this.duration)
    this.riskService.uploadRiskProfile(riskProfile);
  }
}
