import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inimesed',
  templateUrl: './inimesed.component.html',
  styleUrls: ['./inimesed.component.css']
})
export class InimesedComponent implements OnInit {

  
  inimesed = JSON.parse(localStorage.getItem("inimesed2") || "[]");

  constructor() { }

  ngOnInit(): void {
  }

  lisaLehele(item: any){
    const leht = JSON.parse(localStorage.getItem("inimesed") || "[]");
    leht.push(item);
    localStorage.setItem("inimesed", JSON.stringify(leht));
    // this.inimesed.push(item)
  }
}
