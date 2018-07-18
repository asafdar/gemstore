import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from '../gem-model';
import { CartModel } from '../cart-model';
import { CartItemModel } from '../cart-item-model';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {

    @Input()
    cart: CartModel;

    @Input()
    gem: GemModel;

  constructor() { }
  ngOnInit() {  }
  addToCart() {
      this.gem.inventory = this.gem.inventory - 1;
      if(this.gem.inventory <= 0){
          this.gem.name = this.gem.name + '[SOLD OUT]';
      }

      let existingItem: CartItemModel;
		existingItem = this.cart.items.find(x => x.gemid == this.gem.id);

		if(!existingItem) {
			this.cart.items.push({ gemid: this.gem.id, name: this.gem.name, quantity: 1, unitprice: this.gem.price })
		} else {
			existingItem.quantity = existingItem.quantity + 1;
		}

		this.cart.totalquantity = this.cart.totalquantity + 1;
		this.cart.totalprice = this.cart.totalprice + this.gem.price;
  }

}
