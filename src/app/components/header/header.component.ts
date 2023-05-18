import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public yourDelivery = true;
  public screenSize = {
    1280: false,
    768: false
  };
  public changeDeliveryIsOpen = false;
  public menuIsOpen = false;
  public signInIsOpen = false;
  public signUpIsOpen = false;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.breakpointObserver.observe(['(max-width: 1280px)', '(max-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        this.screenSize[768] = !state.breakpoints['(max-width: 768px)'];
        this.screenSize[1280] = !state.breakpoints['(max-width: 1280px)'];
      })
  }

  openChangeDelivery(): void {
    this.changeDeliveryIsOpen = true;
  }

  changeDelivery(check: boolean): void {
    this.yourDelivery = check;
    this.changeDeliveryIsOpen = false;
  }

  translateSite(): void {
    console.log('translateSite');
  }

  addToFavorite(): void {
    console.log('addToFavorite');
  }

  toggleBurgerMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }

  openSignIn(): void {
    this.signUpIsOpen = false;
    this.signInIsOpen = true;
  }

  closeSignIn(): void {
    this.signInIsOpen = false;
  }

  openSignUp(): void {
    this.signUpIsOpen = true;
    this.signInIsOpen = false;
  }

  closeSignUp(): void {
    this.signUpIsOpen = false;
  }

}
