import { Injectable } from '@angular/core';
import { CartModel } from './cart-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

	cart: CartModel = {
		totalprice: 0,
		totalquantity: 0,
		items: []
	}
}
