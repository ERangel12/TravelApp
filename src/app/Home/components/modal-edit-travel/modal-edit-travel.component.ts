import { Component, ElementRef, EventEmitter, inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-edit-travel',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-edit-travel.component.html',
  styleUrl: './modal-edit-travel.component.css'
})
export class ModalEditTravelComponent implements OnInit{
  @Output() responseModal = new EventEmitter<boolean>();
  @ViewChild('ModalEditTravel') ModalEditTravel!: ElementRef;
  @Input() dataForm: any = {};

  private fb = inject(FormBuilder);

  isLoading: boolean = false;

  public formEditTravel = this.fb.group({
    startTravel: ['', [Validators.required]],
    endTravel: ['', [Validators.required]],
    dateStartTravel: ['', [Validators.required]],
    dateEndTravel: ['', [Validators.required]],
    operatorTravel: ['', [Validators.required]]
  });

  ngOnInit(): void {
    this.formEditTravel.patchValue(this.dataForm);
  }

  editTravel(){
    console.log(this.formEditTravel.value);
  }

  closeModal(emitVallue:boolean){
    this.ModalEditTravel.nativeElement.classList.remove('animate__fadeInDown')
    this.ModalEditTravel.nativeElement.classList.add('animate__fadeOutDown')

    setTimeout(() => {
      this.responseModal.emit(emitVallue);
    }, 700);
  }
}
