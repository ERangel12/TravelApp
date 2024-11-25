import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-reutilizable',
  imports: [CommonModule],
  templateUrl: './table-reutilizable.component.html',
  styleUrl: './table-reutilizable.component.css'
})
export class TableReutilizableComponent <T> {
  @Input() data: T[] = [];
  @Input() columns: (keyof T)[] = [];
  @Input() headers:string[]=[];

  @Input() pagination:boolean = false;
  @Input() onlyEdit: boolean = false;
  @Output() returnItemForEdit = new EventEmitter<T>();
  
  page:number = 1;
  itemsPerPage:number = 5;
  ceil = Math.ceil;

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
