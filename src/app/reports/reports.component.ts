import { Component } from '@angular/core';
import * as Highcharts from 'highcharts'

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  Highcharts = Highcharts
  chartOptions = {}

  constructor() {
    this.chartOptions = {
      //give chart configure data from highcharts
      chart: {
        type: 'line'
      },
      title: {
        text: 'Average Monthly Revenue Analysis - 2022'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Revenue (in Lakhs)'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      //to remove the 'highchart.com'
      credits: {
        enabled: false
      },
      series: [{
        name: '2022',
        data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
          22.0, 17.8]
      }]
    }
  }
}
