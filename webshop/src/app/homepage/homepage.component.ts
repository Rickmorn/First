import { Component, OnInit } from '@angular/core';
import productsFromFile from "../../assets/products.json";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  products = productsFromFile
  // categories = new Set(["dice tray", "wooden pen case","dice tray", "wooden pen case","dice tray", "wooden pen case",]);
  categories = new Set(productsFromFile.map(element => element.category));

  constructor() { }

  ngOnInit(): void {
  }

  filterByCategory(categoryClicked: string){
    this.products = productsFromFile.filter(element => element.category === categoryClicked);
  }

  sortAZ(){
    this.products.sort((a,b) => a.name.localeCompare(b.name));
  }

  sortZA(){
    this.products.sort((a,b) => b.name.localeCompare(a.name));
  }

  sortPriceAsc(){
    this.products.sort((a,b) => a.price - b.price);
  }

  sortPriceDesc(){
    this.products.sort((a,b) => b.price - a.price);
  }

  addToCart(clickedItem: any){
    const cartLS = localStorage.getItem("cart") || "[]";
    const cart = JSON.parse(cartLS);
    cart.push(clickedItem);
    const newCart = JSON.stringify(cart);
    localStorage.setItem("cart", newCart);

  }
}
