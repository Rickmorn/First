import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tooted = JSON.parse(localStorage.getItem("tooted") || "[]");

  kujundus=localStorage.getItem("veebilehe_kujundus") || "light mode";

  constructor() { }

  ngOnInit(): void {
  }

  colored(){
    localStorage.setItem("veebilehe_kujundus", "colored");

  }

  dark_mode(){
    localStorage.setItem("veebilehe_kujundus", "dark_mode");


  }

  light_mode(){
    localStorage.setItem("veebilehe_kujundus", "light_mode")

  }


  lisaOstukorvi(klikitudToode: string){
    // const ostukorvLS = localStorage.getItem("ostukorv") || "[]";
    // const ostukorv = JSON.parse(ostukorvLS);
    // ostukorv.push(klikitudToode);
    // const uuenenudOstukorv = JSON.stringify(ostukorv);
    // localStorage.setItem("ostukorv", uuenenudOstukorv);


    const ostukorv2= JSON.parse(localStorage.getItem("ostukorv") || "[]")
    ostukorv2.push(klikitudToode);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv2));
  }

  // 1. võta localstoragest (localStorage.getItem())
  // 2. jutumärgid maha (JSON.parse())
  // 3. lisa üks juurde (.push())
  // 4. jutumärgid peale (JSON.stringify())
  // 5. localstoragesee tagasi (localStorage.setItem())


}
