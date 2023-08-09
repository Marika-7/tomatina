import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductResponse } from 'src/app/shared/interfaces/product/product.interface';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  public currentProduct!: IProductResponse;
  public userFavorites: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data
      .subscribe(response => {
        this.currentProduct = response['productInfo'] as IProductResponse;
      });
  }

  addToFavorite(id: string): void {
    const index = this.userFavorites.indexOf(id);
    if(index === -1) {
      this.userFavorites.push(id);
    } else {
      this.userFavorites.splice(index, 1);
    }
  }

  isFavorite(id: string): boolean {
    return this.userFavorites.includes(id) ? true : false;
  }

  changeCount(product: IProductResponse, plus: boolean): void {
    if(plus) {
      ++product.count;
    } else if(!plus && product.count > 1) {
      --product.count;
    }
  }

  addToBasket(product: IProductResponse): void {
    console.log('addToBasket');
  }

  fastOrder(product: IProductResponse): void {
    console.log('Швидке замовлення: ' + product.name);
  }

}
