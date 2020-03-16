import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductSearchComponent } from './product-search/product-search.component';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductSearchComponent,
    PortfolioViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
