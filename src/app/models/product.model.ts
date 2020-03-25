export class Product {
  id: bigint;
  isin: string;
  name: string;
  productType: string;
  region: string;
  indexLevel: number;
  performanceTotal: number;
  performanceThisYear: number;

  constructor(id: bigint, isin: string, name?: string, productType?: string,
              region?: string, indexLevel?: number, performanceTotal?: number,
              performanceThisYear?: number) {
    this.id = id;
    this.isin = isin;
    this.name = name;
    this.productType = productType;
    this.region = region;
    this.indexLevel = indexLevel;
    this.performanceTotal = performanceTotal;
    this.performanceThisYear = performanceThisYear;
  }
}
