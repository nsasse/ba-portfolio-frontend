import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ProductSearchComponent} from './components/product-search/product-search.component';
import {PortfolioViewComponent} from './components/portfolio-view/portfolio-view.component';
import {RiskAnalyseComponent} from './components/risk-analyse/risk-analyse.component';
import {PortfolioDetailsComponent} from './components/portfolio-details/portfolio-details.component';
import {PortfolioListComponent} from './components/portfolio-list/portfolio-list.component';

import {DataService} from './services/data.service';

import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatOptionModule} from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    ProductSearchComponent,
    PortfolioViewComponent,
    RiskAnalyseComponent,
    PortfolioDetailsComponent,
    PortfolioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {
}
