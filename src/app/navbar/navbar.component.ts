import { Component, OnInit, Input } from '@angular/core';
import { CartModel } from '../cart-model';
import { CartItemModel } from '../cart-item-model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    cart: CartModel;

  constructor(private cartService: CartService) { }

  ngOnInit() {
      this.cart = this.cartService.cart;
  }

}
