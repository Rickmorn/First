import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
// import productsFromFile from "../../../assets/products.json";

@Component({
  selector: 'app-maintain-products',
  templateUrl: './maintain-products.component.html',
  styleUrls: ['./maintain-products.component.css']
})
export class MaintainProductsComponent implements OnInit {

  searchProduct = "";
  products: any[] = [];
  private dbProducts: any[] = [];
  descriptionLetters = 5;
  
  constructor(private http: HttpClient, 
    private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.http.get<any[]>(this.databaseService.productsDbUrl).subscribe(response => {
      this.products = response.slice();  // .slice() -> malukoha kaotamine
      this.dbProducts = response.slice(); // programm ei naeks neid identsena (tulevad samast kohast)
    })
  }

  

  deleteProduct(productClicked: any){
    const i = this.dbProducts.findIndex(element => element.id === productClicked.id);
    this.dbProducts.splice(i,1);
    this.products = this.dbProducts;
    this.searchProducts();
    this.http.put(this.databaseService.productsDbUrl, this.dbProducts).subscribe();
  }

  searchProducts(){
    // console.log(this.searchProduct);
    this.products = this.dbProducts.filter(element => 
      element.name.toLocaleLowerCase().includes(this.searchProduct.toLocaleLowerCase()));
  }
  
  
}
