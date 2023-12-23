// import Output as well
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: "./products-header.component.html",
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {
  // this is the way to send the data out of your components to parent components
  @Output() colsCountChange = new EventEmitter<number>();


  // create variable to update using the sort function
  sort = 'desc';

  itemsShowCount = 12;

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count
  }

  onColumnsUpdated(colsNum: number): void {
    this.colsCountChange.emit(colsNum)
  }

}
