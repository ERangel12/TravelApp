import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-reutilizable',
  imports: [CommonModule],
  templateUrl: './table-reutilizable.component.html',
  styleUrl: './table-reutilizable.component.css',
  providers:[DatePipe,CurrencyPipe]
})
export class TableReutilizableComponent <T> {
  @Input() data: T[] = [];
  @Input() columns: (keyof T)[] = [];
  @Input() headers:string[]=[];

  @Input() pagination:boolean = false;
  @Input() onlyEdit: boolean = false;
  @Output() returnItemForEdit = new EventEmitter<T>();

  private datePipe = inject(DatePipe);
  
  page:number = 1;
  itemsPerPage:number = 5;
  ceil = Math.ceil;

  formatDate(value: any, column: any,item:any): string {
    const dateColumns = [
      'startDate',
      'endDate',
    ];

    if (dateColumns.includes(column)) {
      return this.datePipe.transform(value, 'dd/MM/yyyy') || '';
    }

    return value;
  }

  onReturnItemForEdit(item: T) {
    this.returnItemForEdit.emit(item);
  }

  get currentPageData():T[]{
    const start = (this.page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.data.slice(start, end);
  }

  onPageChange(page:number){
    this.page = page;
  }
}
