import { Component, OnInit, Input } from '@angular/core';
import { CartModel } from '../cart-model';
import { CartItemModel } from '../cart-item-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    @Input()
    cart: CartModel;

  constructor() { }

  ngOnInit() {
  }

}
