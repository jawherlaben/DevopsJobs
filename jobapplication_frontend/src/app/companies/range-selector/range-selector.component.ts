// range-selector.component.ts 

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-range-selector',
  templateUrl: './range-selector.component.html',
  styleUrls: ['./range-selector.component.css']
})
export class RangeSelectorComponent {
  @Output() rangeChange = new EventEmitter<number>();

  onRangeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;
    this.rangeChange.emit(parseInt(value, 5));
  }
  
}
