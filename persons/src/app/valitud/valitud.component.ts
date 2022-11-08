import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-valitud',
  templateUrl: './valitud.component.html',
  styleUrls: ['./valitud.component.css']
})
export class ValitudComponent implements OnInit {


  inimesed= [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "sincere@april.biz",
      "vanus": 35
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "shanna@malissa.tv",
      "vanus": 56
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "nathan@yesenia.net",
      "vanus": 68
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "julianne.oconner@kory.org",
      "vanus": 19
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "lucio_hettinger@annie.org",
      "vanus": 52
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "karley_dach@jasper.info",
      "vanus": 33
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "telly.hoeger@billy.biz",
      "vanus": 42
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "sherwood@rosamond.me",
      "vanus": 21
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "chaim_mcdermott@dana.io",
      "vanus": 63
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "rey.padberg@karina.biz",
      "vanus": 42
    }
  ]



  constructor() { }

  ngOnInit(): void {
  }


  lisa(inimene: any){
    this.inimesed.push(inimene);
  }

  kustuta(id: any){
    const j2rjekorraNumber = this.inimesed.indexOf(id);
    this.inimesed.splice(j2rjekorraNumber,1);
  }

  tyhjenda(){
    this.inimesed = []
  }

  // calculateAverage(){
  // this.inimesed.reduce();
  // }

  calculateAverage(){
    // let sum = 0;
    // let itemsFound = 0;
    // const len = this.inimesed.length;
    // let item = null;
    // for (let i = 0; i< len; i++) {
    //   item = this.inimesed[i];
    //   if (item.found) {}
    // }

  }
}
