export class RiskProfile {
  riskTolerance: string;
  expectedYield: string;
  duration: number;


  constructor(riskTolerance: string, expectedYield: string, duration: number) {
    this.riskTolerance = riskTolerance;
    this.expectedYield = expectedYield;
    this.duration = duration;
  }
}
