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
    const cart: any[] = JSON.parse(cartLS);
    // {product: clickedItem, quanity : 1}
    const index = cart.findIndex(element => element.product.id === clickedItem.id);
    if (index >= 0) {
      cart[index].quantity = cart[index].quantity + 1;
    } else {
      cart.push({"product": clickedItem, "quantity": 1});
      //    {product: {id: 1, name: "s", price:21}, quantity: 1}
    }
    
    const newCart = JSON.stringify(cart);
    localStorage.setItem("cart", newCart);

  }
}
