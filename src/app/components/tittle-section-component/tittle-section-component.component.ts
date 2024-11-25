import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tittle-section-component',
  imports: [],
  templateUrl: './tittle-section-component.component.html',
  styleUrl: './tittle-section-component.component.css'
})
export class TittleSectionComponentComponent {
  @Input() title: string = '';
@Input() subtitle: string = '';
}
