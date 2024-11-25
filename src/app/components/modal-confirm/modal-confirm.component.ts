import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-confirm',
  imports: [],
  templateUrl: './modal-confirm.component.html',
  styleUrl: './modal-confirm.component.css'
})
export class ModalConfirmComponent {
  @Input() mensajeModal: string = '';
  @Input() loadingButton: boolean = false;
  @Output() responseModal = new EventEmitter<boolean>();
  @ViewChild('ModalConfirm') ModalConfirm!: ElementRef;

  closeModalFalse(emitVallue: boolean) {
    this.ModalConfirm.nativeElement.classList.remove('animate__fadeInDown');
    this.ModalConfirm.nativeElement.classList.add('animate__fadeOutDown');

    setTimeout(() => {
      this.responseModal.emit(emitVallue);
    }, 700);
  }

  closeModalTrue(emitVallue: boolean) {
    if (this.loadingButton) {
      return;
    }

    setTimeout(() => {
      this.responseModal.emit(emitVallue);
    }, 700);
  }
}
