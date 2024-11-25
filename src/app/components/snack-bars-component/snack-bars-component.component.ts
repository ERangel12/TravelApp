import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snack-bars-component',
  imports: [],
  templateUrl: './snack-bars-component.component.html',
  styleUrl: './snack-bars-component.component.css'
})
export class SnackBarsComponentComponent {
  @Input() type: number = 0;
  @Input() texto: string = "";
}
