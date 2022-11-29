import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import productsFromFile from "../../assets/products.json";
import { ToastService } from 'angular-toastify';
import { TranslateService } from '@ngx-translate/core';
import { Options } from '@angular-slider/ngx-slider';
import { Product } from '../models/product.model';
import { CartProduct } from '../models/cart-product.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  products: Product[] = []; 
  // products = productsFromFile
  // categories = new Set(["dice tray", "wooden pen case","dice tray", "wooden pen case","dice tray", "wooden pen case",]);
  private dbProducts: Product[] = [];
  categories: string[] = [];
  currentDate = new Date();
  percent = 0.5;
  private productsDbUrl = "https://generic-shop-default-rtdb.europe-west1.firebasedatabase.app/products.json";

  minValue: number = 0;
  maxValue: number = 9999999;
  options: Options = {
    floor: 0,
    ceil: 9999999
  }



  constructor(private http: HttpClient,
    private toastService: ToastService,
    private translateService: TranslateService) { }

  ngOnInit(): void {
    this.http.get<any[]>(this.productsDbUrl).subscribe(response => {
    this.products = response.slice();  // .slice() -> malukoha kaotamine
    this.dbProducts = response.slice(); // programm ei naeks neid identsena (tulevad samast kohast)
    response.sort((a,b) => a.price - b.price);
    this.categories = [...new Set(this.products.map(element => element.category))];
    this.options = {
      floor: response[0].price,
      ceil: response[response.length-1].price
    }
  });
  setInterval(()=>{
    this.currentDate = new Date();
  })
  }

  filterProductsByPrice(){
    this.products = this.dbProducts.filter(element => element.price > this.minValue && element.price <= this.maxValue );
  }

  filterByCategory(categoryClicked: string){
    this.products = this.dbProducts.filter(element => element.category === categoryClicked);
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
    const cart: CartProduct[] = JSON.parse(cartLS);
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
    this.toastService.success(this.translateService.instant('toast.added-to-cart'));

  }

  ogProducts(){
    this.products = this.dbProducts.slice(); // .slice malukoha kaotamine
  }
}



// Leaflet - kaardirakendus (paneme k8ik poed)
// emailjs.com