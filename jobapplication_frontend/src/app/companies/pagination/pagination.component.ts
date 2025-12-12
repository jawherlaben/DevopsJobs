import { Component, EventEmitter, Input, Output, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() totalCompanies: number = 0;
  @Input() companiesPerPage: number = 5;
  @Output() pageChanged = new EventEmitter<number>();
  pages: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalCompanies'] || changes['companiesPerPage']) {
      this.updatePages();
    }
  }

  updatePages(): void {
    const pageCount = Math.ceil(this.totalCompanies / this.companiesPerPage);
    this.pages = Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  changePage(page: number): void {
    this.pageChanged.emit(page);
  }
}
