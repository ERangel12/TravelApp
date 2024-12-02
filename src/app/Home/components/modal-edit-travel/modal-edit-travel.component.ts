import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ListCitys } from '../../interfaces/list-citys.interface';
import { ListOperators } from '../../interfaces/list-operators.interface';
import { SpinnerInlineComponent } from '../../../components/spinner-inline/spinner-inline.component';
import { TravelApiService } from '../../services/travel-api.service';
import { SnackBarService } from '../../../shared/services/snack-bar.service';
import { TravelList } from '../../interfaces/travel-list.interface';
import { forkJoin } from 'rxjs';
import { NewTravel } from '../../interfaces/new-travel.interface';

@Component({
  selector: 'app-modal-edit-travel',
  imports: [ReactiveFormsModule, SpinnerInlineComponent],
  templateUrl: './modal-edit-travel.component.html',
  styleUrl: './modal-edit-travel.component.css',
})
export class ModalEditTravelComponent implements OnInit {
  @Output() responseModal = new EventEmitter<boolean>();
  @ViewChild('ModalEditTravel') ModalEditTravel!: ElementRef;
  @Input() dataForm: TravelList = {
    travelId: 0,
    origenName: '',
    destinationName: '',
    operatorName: '',
    startDate: new Date(),
    endDate: new Date(),
  };

  private fb = inject(FormBuilder);
  private travelService = inject(TravelApiService);
  public alertsService = inject(SnackBarService);

  isLoading: boolean = false;
  isLoadingDestinations: boolean = false;
  isLoadingOperators: boolean = false;

  LIST_DESTINATIONS: ListCitys[] = [];
  LIST_OPERATORS: ListOperators[] = [];

  public formEditTravel = this.fb.group({
    startTravel: ['', [Validators.required]],
    endTravel: ['', [Validators.required]],
    dateStartTravel: ['', [Validators.required]],
    dateEndTravel: ['', [Validators.required]],
    operatorTravel: ['', [Validators.required]],
  }, { validators: this.dateValidator() });

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


  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.isLoadingDestinations = true;
    this.isLoadingOperators = true;

    forkJoin({
      destinations: this.travelService.getCitys(),
      operators: this.travelService.getOperators(),
    }).subscribe({
      next: ({ destinations, operators }) => {
        this.LIST_DESTINATIONS = destinations;
        this.LIST_OPERATORS = operators;
        this.isLoadingDestinations = false;
        this.isLoadingOperators = false;
        this.fillData();
      },
      error: (err) => {
        console.log(err);
        this.isLoadingDestinations = false;
        this.isLoadingOperators = false;
        this.alertsService.alerts(3, 'Ocurrió un error al obtener los datos');
      },
    });
  }

  fillData() {
    const destinationStart = this.LIST_DESTINATIONS.find(
      (dest) => dest.city === this.dataForm.destinationName
    );
    const destinationEnd = this.LIST_DESTINATIONS.find(
      (dest) => dest.city === this.dataForm.origenName
    );
    const operator = this.LIST_OPERATORS.find(
      (op) => op.name === this.dataForm.operatorName
    );

    console.log(destinationStart);
    console.log(destinationEnd);
    console.log(operator);

    this.formEditTravel.patchValue({
      startTravel: destinationStart?.id.toString(),
      endTravel: destinationEnd?.id.toString(),
      dateStartTravel: this.formatDate(this.dataForm.startDate),
      dateEndTravel: this.formatDate(this.dataForm.endDate),
      operatorTravel: operator?.id.toString(),
    });
  }

  formatDate(date: Date): string {
    const validDate = new Date(date);

    if (isNaN(validDate.getTime())) {
      return ''; 
    }

    const year = validDate.getFullYear();
  const month = (validDate.getMonth() + 1).toString().padStart(2, '0'); // Añadir ceros si es necesario
  const day = validDate.getDate().toString().padStart(2, '0'); // Añadir ceros si es necesario
  return `${year}-${month}-${day}`;
  }

  editTravel() {
    this.isLoading = true;
    const newTravel: NewTravel = {
      destinationId: parseInt(this.formEditTravel.value.startTravel ?? ''),
      originId: parseInt(this.formEditTravel.value.endTravel ?? ''),
      operatorId: parseInt(this.formEditTravel.value.operatorTravel ?? ''),
      startDate: new Date(
        this.formEditTravel.value.dateStartTravel || new Date()
      ),
      endDate: new Date(this.formEditTravel.value.dateEndTravel || new Date()),
    };
    this.travelService.editTravel(this.dataForm.travelId, newTravel).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.closeModal(true);
        this.alertsService.alerts(1, 'Viaje editado exitosamente');
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
        this.alertsService.alerts(3, 'Ocurrio un error al editar el viaje');
      },
    });
  }

  closeModal(emitVallue: boolean) {
    this.ModalEditTravel.nativeElement.classList.remove('animate__fadeInDown');
    this.ModalEditTravel.nativeElement.classList.add('animate__fadeOutDown');

    setTimeout(() => {
      this.responseModal.emit(emitVallue);
    }, 700);
  }
}
