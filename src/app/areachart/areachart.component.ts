import { Component } from '@angular/core';
import * as Highcharts from 'highcharts'
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-areachart',
  templateUrl: './areachart.component.html',
  styleUrls: ['./areachart.component.css']
})
export class AreachartComponent {
  Highcharts=Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions ={
      //give chart configure data from highcharts
      chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly Average Revenue'
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
    credits:{
      enabled:false
    },
    series: [{
        name: '2022',
        data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
            22.0, 17.8]
    }, {
        name: '2021',
        data: [2.9, 3.6, 4.1, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5,
            2.0, 0.9]
    }]
    }
  }
}
