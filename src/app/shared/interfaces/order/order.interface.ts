import { IProductResponse } from "../product/product.interface";

export interface IOrderRequest {
  number: number;
  date: string;
  user: string;
  delivery: string;
  products: IProductResponse[];
  sum: number;
  status: string;
}

export interface IOrderResponse extends IOrderRequest {
  id: string;
}
