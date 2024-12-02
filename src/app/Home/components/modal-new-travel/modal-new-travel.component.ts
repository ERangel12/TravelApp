import { Component, ElementRef, EventEmitter, inject, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { SpinnerInlineComponent } from '../../../components/spinner-inline/spinner-inline.component';
import { TravelApiService } from '../../services/travel-api.service';
import { ListCitys } from '../../interfaces/list-citys.interface';
import { ListOperators } from '../../interfaces/list-operators.interface';
import { NewTravel } from '../../interfaces/new-travel.interface';
import { SnackBarService } from '../../../shared/services/snack-bar.service';

@Component({
  selector: 'app-modal-new-travel',
  imports: [ReactiveFormsModule,SpinnerInlineComponent],
  templateUrl: './modal-new-travel.component.html',
  styleUrl: './modal-new-travel.component.css'
})
export class ModalNewTravelComponent implements OnInit {
  @Output() responseModal = new EventEmitter<boolean>();
  @ViewChild('ModalNewTravel') ModalNewTravel!: ElementRef;

  private fb = inject(FormBuilder);
  private travelService = inject(TravelApiService);
  public alertsService = inject(SnackBarService)

  isLoading: boolean = false;
  isLoadingDestinations: boolean = false;
  isLoadingOperators: boolean = false;

  LIST_DESTINATIONS: ListCitys[] = []
  LIST_OPERATORS: ListOperators[] = []

  public formNewTravel = this.fb.group({
    startTravel: ['', [Validators.required]],
    endTravel: ['', [Validators.required]],
    dateStartTravel: ['', [Validators.required]],
    dateEndTravel: ['', [Validators.required]],
    operatorTravel: ['', [Validators.required]]
  },{ validators: this.dateValidator() });

  ngOnInit(): void {
    this.getListDestinations();
    this.getListOperators();
  }

dateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const dateStartTravel = control.get('dateStartTravel')?.value;
      const dateEndTravel = control.get('dateEndTravel')?.value;
  
      if ( dateStartTravel && dateEndTravel && new Date(dateEndTravel) < new Date(dateStartTravel)) {
        return { dateValid: true };
      }
      return null;
    };
  }

  getListDestinations(){
    this.isLoadingDestinations = true
    this.travelService.getCitys().subscribe({
      next: (res) => {
        this.LIST_DESTINATIONS = res
        this.isLoadingDestinations = false
      },
      error: (err) => {
        console.log(err);
        this.isLoadingDestinations = false
        this.alertsService.alerts(3, 'Ocurrio un error al obtener las ciudades');
      }
    })
  }

  getListOperators(){
    this.isLoadingOperators = true
    this.travelService.getOperators().subscribe({
      next: (res) => {
        this.isLoadingOperators = false
        this.LIST_OPERATORS = res
      },
      error: (err) => {
        console.log(err);
        this.isLoadingOperators = false
        this.alertsService.alerts(3, 'Ocurrio un error al obtener los operadores');
      }
    })
  }

  createTravel(){
    this.isLoading = true
    const newTravel:NewTravel = {
      destinationId: parseInt(this.formNewTravel.value.startTravel ?? ''),
      originId: parseInt(this.formNewTravel.value.endTravel ?? ''),
      operatorId: parseInt(this.formNewTravel.value.operatorTravel ?? ''),
      startDate:  new Date(this.formNewTravel.value.dateStartTravel || new Date()),
      endDate: new Date(this.formNewTravel.value.dateEndTravel || new Date())
    }
    this.travelService.newTrabel(newTravel).subscribe({
      next: (res) => {
        this.isLoading = false
        this.closeModal(true)
        this.alertsService.alerts(1, 'Viaje creado exitosamente');
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false
        this.alertsService.alerts(3, 'Ocurrio un error al crear el viaje');
      }
    })
  }

  closeModal(emitVallue:boolean){
    this.ModalNewTravel.nativeElement.classList.remove('animate__fadeInDown')
    this.ModalNewTravel.nativeElement.classList.add('animate__fadeOutDown')

    setTimeout(() => {
      this.responseModal.emit(emitVallue);
    }, 700);
  }
}
