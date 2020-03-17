import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskAnalyseComponent } from './risk-analyse.component';

describe('RiskAnalyseComponent', () => {
  let component: RiskAnalyseComponent;
  let fixture: ComponentFixture<RiskAnalyseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskAnalyseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
