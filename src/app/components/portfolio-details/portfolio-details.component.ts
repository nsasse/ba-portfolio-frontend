import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {PortfolioWeighting} from '../../models/portfolioweighting.enum';
import * as Chart from 'chart.js';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {

  optimalCanvers = 'optimalcanvas';
  optimalChart = [];
  optimalPortfolioWeight: number[] = [];

  constructor(private dataService: DataService) {
    this.initOptimalChart();
  }

  ngOnInit(): void {
    this.optimalChart.push(new Chart(this.optimalCanvers, {
      type: 'doughnut',
      data: {
        labels: ['Investment-Themen', 'Aktienfonds', 'Anleihenfonds', 'Geldmarktfonds', 'Rohstoffe'],
        datasets: [{
          data: [this.optimalPortfolioWeight[0], this.optimalPortfolioWeight[1], this.optimalPortfolioWeight[2],
            this.optimalPortfolioWeight[3], this.optimalPortfolioWeight[4]],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(215, 206, 86, 1)',
            'rgba(105, 206, 86, 1)'
          ],
          borderWidth: 1
        }],
      },
      options: {
        responsive: false
      }
    }));
    this.initOptimalChart();
  }

  private countLength(array: [Product]): number {
    let counter = 0;
    array.every(data => counter++);
    return counter;
  }

  private initOptimalChart() {
    console.log('init')
    switch (this.dataService.portfolioWeighting) {
      case PortfolioWeighting.ADVISOR_0:
        this.optimalPortfolioWeight.push(0, 0, 80, 10, 10);
        return;
      case PortfolioWeighting.ADVISOR_25:
        this.optimalPortfolioWeight.push(10, 15, 60, 5, 10);
        return;
      case PortfolioWeighting.ADVISOR_50:
        this.optimalPortfolioWeight.push(20, 30, 40, 0, 10);
        return;
      case PortfolioWeighting.ADVISOR_75:
        this.optimalPortfolioWeight.push(25, 50, 20, 0, 5);
        return;
    }
  }
}
