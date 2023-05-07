import {Component} from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}

//table
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Mobile', weight: 25, symbol: 'Apple'},
  {position: 2, name: 'Laptop', weight: 46, symbol: 'Dell'},
  {position: 3, name: 'Camera', weight: 61, symbol: 'Sony'},
  {position: 4, name: 'Television', weight: 92, symbol: 'Onida'},
  {position: 5, name: 'Computer', weight: 11, symbol: 'Acer'},
  {position: 6, name: 'Speaker',weight: 12, symbol: 'Boat'},
  {position: 7, name: 'Headset', weight: 17, symbol: 'JBL'},
  {position: 8, name: 'Watch', weight: 14, symbol: 'Noise'},
];
