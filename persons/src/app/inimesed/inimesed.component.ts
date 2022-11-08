import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inimesed',
  templateUrl: './inimesed.component.html',
  styleUrls: ['./inimesed.component.css']
})
export class InimesedComponent implements OnInit {


  inimesed= [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "sincere@april.biz",
      "vanus": "35"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "shanna@malissa.tv",
      "vanus": "56"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "nathan@yesenia.net",
      "vanus": "68"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "julianne.oconner@kory.org",
      "vanus": "19"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "lucio_hettinger@annie.org",
      "vanus": "52"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "karley_dach@jasper.info",
      "vanus": "33"
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "telly.hoeger@billy.biz",
      "vanus": "42"
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "sherwood@rosamond.me",
      "vanus": "21"
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "chaim_mcdermott@dana.io",
      "vanus": "63"
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "rey.padberg@karina.biz",
      "vanus": "42"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  lisa(vorm :NgForm){
    this.inimesed.push(vorm.value.name)
  }
}
