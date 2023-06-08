import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  public navSelectIsOpen = false;
  public activePage = 'Замовлення';

  toggleNavSelect(): void {
    this.navSelectIsOpen = !this.navSelectIsOpen;
  }

  closeNavSelect(page: string): void {
    this.navSelectIsOpen = false;
    this.activePage = page;
  }

}
