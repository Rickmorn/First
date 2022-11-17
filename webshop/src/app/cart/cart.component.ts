import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  message = "Cart is empty!";

  cart = JSON.parse(localStorage.getItem("cart") || "[]")

  sum = 0;

  constructor() { }

  ngOnInit(): void {
    this.cart.forEach((item: any) => this.sum = this.sum + item.price)
  }

  removeItem(clickedItem: any){
    const lineNumber = this.cart.indexOf(clickedItem);
    this.cart.splice(lineNumber, 1);
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.sum = 0;
    this.cart.forEach((item: any) => this.sum = this.sum + item.price);    
  }

  emptyCart(){
    this.cart = [];
    this.sum = 0;

  }

}
