import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-uus-inimene',
  templateUrl: './uus-inimene.component.html',
  styleUrls: ['./uus-inimene.component.css']
})
export class UusInimeneComponent implements OnInit {

  sonum = "Lisa uus inimene";

  constructor() { }

  ngOnInit(): void {
  }


  lisaInim(vorm: NgForm){
    this.sonum = "Uus inimene lisatud";
    const inimesedLS = localStorage.getItem("inimesed2") || "[]";
    const inimesed = JSON.parse(inimesedLS);
    inimesed.push(vorm.value);
    const uuedInimesed = JSON.stringify(inimesed);
    localStorage.setItem("inimesed2", uuedInimesed);
  }
}
