import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  sonum= "Lisa uus toode!";

  ostukorv = ["coca", "piim", "munad", "vesi", "majonees", "jahu", "ananass"];
  

  constructor() { }

  ngOnInit(): void {
  }

  kustuta(klikitudItem: string){
    const j2rjekorraNumber = this.ostukorv.indexOf(klikitudItem);
    this.ostukorv.splice(j2rjekorraNumber, 1);
  }

  tyhjenda(){
    this.ostukorv = [];
  }

  lisa(klikitudItem: string){
    this.ostukorv.push(klikitudItem);

  }

  lisaToode(vorm: NgForm){
    this.sonum = "Uus toode lisatud";
    const tootedLS = localStorage.getItem("tooted") || "[]";
    const tooted = JSON.parse(tootedLS);
    tooted.push(vorm.value.nimi);
    const uuedTooted = JSON.stringify(tooted);
    localStorage.setItem("tooted", uuedTooted);

    // 1. võtan localstorageist
    // 2. võta jutumärgid maha 
    // 3. pushin ühe juurde
    // 4. panen jutumärgid tagasi
    // 5. panen localstoragesse tagasi

    // const tooted2 = JSON.parse(localStorage.getItem("tooted") || "[]");
    // tooted2.push(vorm.value.nimi);
    // localStorage.setItem("tooted", JSON.stringify(tooted2));
  }


}


// = uus väärtus
// === kas vasak ja parem pool võrduvad
// : tüübi andmiseks  (millist liiki väärtus sisse läheb "nt. string")