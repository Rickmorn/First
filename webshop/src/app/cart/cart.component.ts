import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  message = "Cart is empty!";

  cart: any[] = JSON.parse(localStorage.getItem("cart") || "[]")

  sum = 0;
  totalItems = 0;

  constructor() { }

  ngOnInit(): void {
    this.cart.forEach(item => this.sum = this.sum + item.product.price * item.quantity);
    this.cart.forEach(item => this.totalItems = this.totalItems + item.quantity);
  }

  removeItem(i: any){
    // const lineNumber = this.cart.indexOf(i);
    this.cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.sum = 0;
    this.cart.forEach((item: any) => this.sum = this.sum + item.product.price * item.quantity);
    this.totalItems = 0;
    this.cart.forEach(item => this.totalItems = this.totalItems + item.quantity);    
  }

  emptyCart(){
    this.cart = [];
    this.sum = 0;

  }

  increase(i:number){
    this.cart[i].quantity = this.cart[i].quantity + 1;
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.sum = 0;
    this.cart.forEach((item: any) => this.sum = this.sum + item.product.price * item.quantity);
    this.totalItems = 0;
    this.cart.forEach(item => this.totalItems = this.totalItems + item.quantity);
  }
  // increase ja decrease iseseisvalt veel ei m8juta kogusummat
  decrease(i:number){
    this.cart[i].quantity = this.cart[i].quantity - 1;
    if (this.cart[i].quantity === 0) {
      this.removeItem(i);
    }
    this.updateCart();
    // localStorage.setItem("cart", JSON.stringify(this.cart));
    // this.sum = 0;
    // this.cart.forEach((item: any) => this.sum = this.sum + item.product.price * item.quantity);
    // this.totalItems = 0;
    // this.cart.forEach(item => this.totalItems = this.totalItems + item.quantity);
  }

  updateCart(){
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.sum = 0;
    this.cart.forEach((item: any) => this.sum = this.sum + item.product.price * item.quantity);
    this.totalItems = 0;
    this.cart.forEach(item => this.totalItems = this.totalItems + item.quantity);
  }
}
