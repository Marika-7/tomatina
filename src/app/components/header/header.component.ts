import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ICategoryResponse } from 'src/app/shared/interfaces/category/category.interface';
import { CategoryService } from 'src/app/shared/services/category/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userCategories!: ICategoryResponse[];
  public yourDelivery = '';
  public screenSize = {
    1280: false,
    768: false
  };
  public changeDeliveryIsOpen = false;
  // public changeDeliveryIsOpen = true;
  public navMenuIsOpen = false;
  public burgerMenuIsOpen = false;

  constructor(
    private categoryService: CategoryService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.loadCategories();
    this.checkScreenSize();
  }

  loadCategories(): void {
    this.categoryService.getAll()
      .subscribe(data => {
        this.userCategories = data as ICategoryResponse[];
      });
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

  changeDelivery(delivery: string): void {
    this.yourDelivery = delivery;
    this.changeDeliveryIsOpen = false;
  }

  openNavMenu(): void {
    this.navMenuIsOpen = true;
  }

  toggleNavMenu(): void {
    this.navMenuIsOpen = !this.navMenuIsOpen;
  }

  closeNavMenu(): void {
    this.navMenuIsOpen = false;
  }

  translateSite(): void {
    console.log('translateSite');
  }

  addToFavorite(): void {
    console.log('addToFavorite');
  }

  toggleBurgerMenu(): void {
    this.burgerMenuIsOpen = !this.burgerMenuIsOpen;
  }

}
