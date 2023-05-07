import {Component} from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Mobile', weight: 25, symbol: 'Yes'},
  {position: 2, name: 'Laptop', weight: 46, symbol: 'Yes'},
  {position: 3, name: 'Camera', weight: 61, symbol: 'No'},
  {position: 4, name: 'Television', weight: 92, symbol: 'Yes'},
  {position: 5, name: 'Computer', weight: 11, symbol: 'Yes'},
  {position: 6, name: 'Speaker',weight: 12, symbol: 'Yes'},
  {position: 7, name: 'Headset', weight: 17, symbol: 'No'},
  {position: 8, name: 'Watch', weight: 14, symbol: 'Yes'},
];
