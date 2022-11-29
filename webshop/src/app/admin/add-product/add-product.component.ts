import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { ToastService } from 'angular-toastify';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  message = "Add new product.";

  private dbProducts: Product[] = [];
  idUnique = true;
  private products: Product[] = [];


  constructor(private http: HttpClient, 
    private databaseService: DatabaseService,
    private toastService: ToastService) { }

  ngOnInit(): void {
    this.http.get<Product[]>(this.databaseService.productsDbUrl).subscribe(response => {
      this.dbProducts = response.slice(); // programm ei naeks neid identsena (tulevad samast kohast)
    })
  }


  addProduct(form: NgForm) {
    this.message = "New product added!";
    // const products = JSON.parse(localStorage.getItem("products") || "[]");
    // products.push(vorm.value);
    // localStorage.setItem("products", JSON.stringify(products));
    // productsFromFile.push(vorm.value);
    this.dbProducts.push(form.value);
    this.http.put(this.databaseService.productsDbUrl, this.dbProducts).subscribe(() => {
      form.reset();
      this.toastService.info('Product added');
    });

  }

  checkIdUniqueness(form: NgForm){
   
    const found = this.dbProducts.find(element => element.id === form.value.id);
      if (found === undefined) {
        this.idUnique = true;
      } else {
        this.idUnique = false;
      }
  }
}
