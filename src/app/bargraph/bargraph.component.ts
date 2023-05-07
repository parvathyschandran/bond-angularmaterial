import { Component } from '@angular/core';
import * as Highcharts from 'highcharts'
// to add button which can download view chart
import HC_exporting from 'highcharts/modules/exporting';
@Component({
    selector: 'app-bargraph',
    templateUrl: './bargraph.component.html',
    styleUrls: ['./bargraph.component.css']
})
export class BargraphComponent {

    Highcharts = Highcharts
    chartOptions = {}
    // highcharts
    constructor() {
        this.chartOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Online Sales Details of Gadgets - 2022'
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Units Sold (thousand)'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: 'Items sold in 2022: <b>{point.y:.1f} k</b>'
            },
            //to remove the 'highchart.com'
            credits: {
                enabled: false
            },
            series: [{
                name: 'Population',
                colors: [
                    '#9b20d9', '#9215ac', '#861ec9', '#7a17e6', '#7010f9', '#691af3',
                    '#6225ed', '#5b30e7', '#533be1', '#4c46db', '#4551d5', '#3e5ccf',
                    '#3667c9', '#2f72c3', '#277dbd', '#1f88b7', '#1693b1', '#0a9eaa',
                    '#03c69b', '#00f194'
                ],
                colorByPoint: true,
                groupPadding: 0,
                data: [
                    ['Mobile', 37.33],
                    ['Laptop', 31.18],
                    ['Camera', 11.79],
                    ['TV', 22.23],
                    ['Computer', 18.91],
                    ['Speaker', 10.74],
                    ['Headset', 27.32],
                    ['Watch', 40.89]
                ],
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: '#FFFFFF',
                    align: 'right',
                    format: '{point.y:.1f}', // one decimal
                    y: 10, // 10 pixels down from the top
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            }]
        }

        //to export chart
        HC_exporting(Highcharts);
    }

}

