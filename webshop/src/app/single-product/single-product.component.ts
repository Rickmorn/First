import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  productFound: Product | undefined;

  constructor(private http: HttpClient, 
    private databaseService: DatabaseService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const urlId = Number(this.route.snapshot.paramMap.get("id"));
    this.http.get<Product[]>(this.databaseService.productsDbUrl).subscribe(response => {
      this.productFound = response.find(element => element.id == urlId);
    });
  }

}
