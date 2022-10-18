import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seaded',
  templateUrl: './seaded.component.html',
  styleUrls: ['./seaded.component.css']
})
export class SeadedComponent implements OnInit {

  veebileheKeel = localStorage.getItem("keel");

  constructor() { }

  ngOnInit(): void {
    console.log("seaded")
  }

  salvestaKeel(keeleVorm: NgForm) {
    console.log("je, funktisoon tootab");
    console.log(keeleVorm.value);
    this.veebileheKeel = keeleVorm.value.keel;
    localStorage.setItem("keel",keeleVorm.value.keel);
  }

  salvestaKontaktid(kontaktVorm: NgForm){
    localStorage.setItem("telefon",kontaktVorm.value.telefon);
    localStorage.setItem("email",kontaktVorm.value.email);

  }
}
