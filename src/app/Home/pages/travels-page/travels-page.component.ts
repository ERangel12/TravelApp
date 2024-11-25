import { Component } from '@angular/core';
import { TittleSectionComponentComponent } from '../../../components/tittle-section-component/tittle-section-component.component';
import { ModalNewTravelComponent } from '../../components/modal-new-travel/modal-new-travel.component';
import { TableReutilizableComponent } from '../../../components/table-reutilizable/table-reutilizable.component';

@Component({
  selector: 'app-travels-page',
  imports: [TittleSectionComponentComponent,ModalNewTravelComponent,TableReutilizableComponent],
  templateUrl: './travels-page.component.html',
  styleUrl: './travels-page.component.css'
})
export default class TravelsPageComponent {
  openModalNewTravel: boolean = false

  closeModalNewTravel(emitVallue: boolean) {
    this.openModalNewTravel = emitVallue
  }

  returnItemForEdit(item: PeriodicElement) {
    console.log(item);
  }

  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}