import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Output() searchEvent = new EventEmitter<string>();

  search(query: string): void {
    this.searchEvent.emit(query);
  }
  
}
