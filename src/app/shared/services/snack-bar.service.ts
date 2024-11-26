import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  isActiveBar = signal<boolean>(false);
  typeSnackBar = signal<number>(0);
  messageSnackBar = signal<string>('');

  alerts(type: number, message: string) {
    this.typeSnackBar.set(type);
    this.messageSnackBar.set(message);
    this.isActiveBar.set(true);

    setTimeout(() => {
      this.isActiveBar.set(false);
    }, 3000);
  }
}
