import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  productsDbUrl = "https://generic-shop-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  categoriesDbUrl = "https://generic-shop-default-rtdb.europe-west1.firebasedatabase.app/categories.json";


  constructor() { }
}
