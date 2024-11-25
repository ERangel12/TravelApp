import { Component, ElementRef, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-new-travel',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-new-travel.component.html',
  styleUrl: './modal-new-travel.component.css'
})
export class ModalNewTravelComponent {
  @Output() responseModal = new EventEmitter<boolean>();
  @ViewChild('ModalNewTravel') ModalNewTravel!: ElementRef;

  private fb = inject(FormBuilder);

  isLoading: boolean = false;

  public formNewTravel = this.fb.group({
    startTravel: ['', [Validators.required]],
    endTravel: ['', [Validators.required]],
    dateStartTravel: ['', [Validators.required]],
    dateEndTravel: ['', [Validators.required]],
    operatorTravel: ['', [Validators.required]]
  });

  createTravel(){
    console.log(this.formNewTravel.value);
  }

  closeModal(emitVallue:boolean){
    this.ModalNewTravel.nativeElement.classList.remove('animate__fadeInDown')
    this.ModalNewTravel.nativeElement.classList.add('animate__fadeOutDown')

    setTimeout(() => {
      this.responseModal.emit(emitVallue);
    }, 700);
  }
}
