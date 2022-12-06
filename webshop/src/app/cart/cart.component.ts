import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../models/cart-product.model';
import { ParcelMachnine } from '../models/parcel-Machine.model';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  message = "Cart is empty!";

  cart: CartProduct[] = JSON.parse(localStorage.getItem("cart") || "[]")
  parcelMachines: ParcelMachnine[] = [];

  sum = 0;
  totalItems = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cart.forEach(item => this.sum = this.sum + item.product.price * item.quantity);
    this.cart.forEach(item => this.totalItems = this.totalItems + item.quantity);
    this.http.get<ParcelMachnine[]>("https://www.omniva.ee/locations.json").subscribe(response => 
    this.parcelMachines = response.filter(element => element.A0_NAME === "EE"));
  }

  removeItem(i: number){
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

  pay(){
    // salvestan tellimuse -> andmebaas annab mulle tellimuse ID
    //                            salvestan tellimuse maksmata kujul
const paymentURL = "https://igw-demo.every-pay.com/api/v4/payments/oneoff"

    const paymentData = {      
        "api_username": "92ddcfab96e34a5f",
        "account_name": "EUR3D1",
        "amount": this.sum,
        "order_reference": Math.random() * 6666,
        "nonce": "a9b7f7e794367sdfc2c85asdzfdhdadd34573154a01b9902"+ new Date() + Math.random() * 6666,
        "timestamp": new Date(),
        "customer_url": "https://generic-shop.web.app"        
    }

    const headers = {
      headers: new HttpHeaders({"Authorization":"Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="})
    }

    this.http.post<any>(paymentURL, paymentData, headers).subscribe(response => {
      window.location.href = response.payment_link;
    });



    // muudan andmebaasis tellimuse staatuse makstuks
  }
}
