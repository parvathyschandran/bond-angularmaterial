import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  
  //properties
  @Input() bg : string = ''
  @Input() icon : string = ''
  @Input() title : string = ''
  @Input() count : string = ''

}
