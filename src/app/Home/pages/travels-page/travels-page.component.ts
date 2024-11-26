import { SnackBarService } from './../../../shared/services/snack-bar.service';
import { Component, inject, OnInit } from '@angular/core';
import { TittleSectionComponentComponent } from '../../../components/tittle-section-component/tittle-section-component.component';
import { ModalNewTravelComponent } from '../../components/modal-new-travel/modal-new-travel.component';
import { TableReutilizableComponent } from '../../../components/table-reutilizable/table-reutilizable.component';
import { ModalEditTravelComponent } from '../../components/modal-edit-travel/modal-edit-travel.component';
import { TravelApiService } from '../../services/travel-api.service';
import { TravelList } from '../../interfaces/travel-list.interface';
import { SnackBarsComponentComponent } from '../../../components/snack-bars-component/snack-bars-component.component';
import { SpinnerInlineComponent } from '../../../components/spinner-inline/spinner-inline.component';

@Component({
  selector: 'app-travels-page',
  imports: [
    TittleSectionComponentComponent,
    ModalNewTravelComponent,
    TableReutilizableComponent,
    ModalEditTravelComponent,
    SnackBarsComponentComponent,
    SpinnerInlineComponent,
  ],
  templateUrl: './travels-page.component.html',
  styleUrl: './travels-page.component.css',
})
export default class TravelsPageComponent implements OnInit {
  private travelService = inject(TravelApiService);
  public alertsService = inject(SnackBarService);

  openModalNewTravel: boolean = false;
  openModalEditTravel: boolean = false;
  dataForm!: TravelList;
  LIST_TRAVELS: TravelList[] = [];
  isLoading: boolean = false;

  ngOnInit(): void {
    this.getListTravels();
  }

  getListTravels() {
    this.isLoading = true;
    this.travelService.getTravels().subscribe({
      next: (res) => {
        this.LIST_TRAVELS = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
        this.alertsService.alerts(3, 'Ocurrio un error al obtener los viajes');
      },
    });
  }

  closeModalNewTravel(emitVallue: boolean) {
    if (!emitVallue) {
      this.openModalNewTravel = false;
      return;
    }
    this.openModalNewTravel = false;
    this.getListTravels();
  }

  returnItemForEdit(item: any) {
    this.dataForm = item;
    this.openModalEditTravel = true;
  }

  closeModalEditTravel(emitVallue: boolean) {
    if (!emitVallue) {
      this.openModalEditTravel = false;
      return;
    }
    this.openModalEditTravel = false;
    this.getListTravels();
  }
}
