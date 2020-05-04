import {Component, OnInit} from '@angular/core';
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

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.optimalChart.push(new Chart(this.optimalCanvers, {
      type: 'doughnut',
      data: {
        labels: ['Investment-Themen', 'Aktienfonds', 'Anleihenfonds', 'Geldmarktfonds', 'Rohstoffe'],
        datasets: [{
          data: [this.dataService.productWeightingQuotes[0], this.dataService.productWeightingQuotes[1],
            this.dataService.productWeightingQuotes[2], this.dataService.productWeightingQuotes[3],
            this.dataService.productWeightingQuotes[4]],
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
  }
}
