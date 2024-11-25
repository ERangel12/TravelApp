import { Component } from '@angular/core';
import { LateralMenuComponent } from '../../../components/lateral-menu/lateral-menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-home',
  imports: [LateralMenuComponent, RouterOutlet],
  templateUrl: './layout-home.component.html',
  styleUrl: './layout-home.component.css'
})
export default class LayoutHomeComponent {

}
