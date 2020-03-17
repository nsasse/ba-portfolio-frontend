import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { PortfolioViewComponent } from './components/portfolio-view/portfolio-view.component';
import { RiskAnalyseComponent } from './components/risk-analyse/risk-analyse.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductSearchComponent,
    PortfolioViewComponent,
    RiskAnalyseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
