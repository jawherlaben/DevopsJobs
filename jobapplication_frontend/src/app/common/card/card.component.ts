import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() backgroundColor: string = 'bg-gray-300/50';
  @Input() flexStyle: string = 'flex-col';

  get classes(): string {
    return `flex ${this.flexStyle} gap-5 justify-center p-7 rounded-xl shadow-xl ${this.backgroundColor}`;
  }
}
