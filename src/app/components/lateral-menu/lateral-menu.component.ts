import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-lateral-menu',
  imports: [],
  templateUrl: './lateral-menu.component.html',
  styleUrl: './lateral-menu.component.css'
})
export class LateralMenuComponent {
  private route = inject(Router);
  menuVisible: boolean = false;

 
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  closeMenu() {
    this.menuVisible = false;
  }
}
