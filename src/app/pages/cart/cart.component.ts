import { Component, OnInit, } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: "./cart.component.html"
})
export class CartComponent implements OnInit {

  cart: Cart = {
    items: [{
      product: 'https://showscene.ca/wp-content/uploads/2017/03/1c0d0f0cb8b7f2fb2685da9798efe42b_big-image-png-image-placeholder-clipart_2400-2400.png',
      name: 'snikers',
      price: 150,
      quantity: 1,
      id: 1,
    }]
  };

  dataSource: Array<CartItem> = []

  // thís í for displaying outline? 
  displayedColumns: Array<string> = [
    'product',
    // 'name',
    // 'price',
    // 'quantity',
    // 'total',
    // 'action'
  ]


  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.cart.items
  }

}
