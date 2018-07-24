import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from '../gem-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CartModel } from '../cart-model';
import { CartItemModel } from '../cart-item-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	@Input()
	cart: CartModel;

    homeGems: GemModel[];

    constructor(private httpClient: HttpClient) { }
    ngOnInit() {
        this.httpClient.get<GemModel[]>('http://localhost:52631/gem').subscribe((results) => { this.homeGems = results });
  }

}
