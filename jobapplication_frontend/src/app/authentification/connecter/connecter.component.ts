import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-connecter',
  templateUrl: './connecter.component.html',
  styleUrls: ['./connecter.component.css']
})
export class ConnecterComponent {
  @Input() connectType: string = 'user';
  
  constructor() {}
}