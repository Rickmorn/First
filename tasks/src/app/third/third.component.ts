import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  sonum= "Lisa uus toode!";

  ostukorv: any[] = JSON.parse(localStorage.getItem("ostukorv") || "[]");
  
  kogusumma = 0;

  avg = 0;
  

  constructor() { }

  ngOnInit(): void {
    this.ostukorv.forEach(ese => this.kogusumma = this.kogusumma + ese.hind);
    this.avg = this.kogusumma/this.ostukorv.length;
  }

  kustuta(klikitudItem: string){
    const j2rjekorraNumber = this.ostukorv.indexOf(klikitudItem);
    this.ostukorv.splice(j2rjekorraNumber, 1);
    localStorage.setItem("ostukorv", JSON.stringify(this.ostukorv));
    this.kogusumma = 0;
    this.ostukorv.forEach(ese => this.kogusumma = this.kogusumma + ese.hind);
  }

  tyhjenda(){
    this.ostukorv = [];
    this.kogusumma = 0;
    // this.ostukorv.forEach(ese => this.kogusumma = this.kogusumma + ese.hind);
  }

  lisa(klikitudItem: string){
    this.ostukorv.push(klikitudItem);
    this.kogusumma = 0;
    this.ostukorv.forEach(ese => this.kogusumma = this.kogusumma + ese.hind);

  }

  lisaToode(vorm: NgForm){
    this.sonum = "Uus toode lisatud";
    const tootedLS = localStorage.getItem("tooted") || "[]";
    const tooted = JSON.parse(tootedLS);
    tooted.push(vorm.value);
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