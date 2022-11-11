import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-valitud',
  templateUrl: './valitud.component.html',
  styleUrls: ['./valitud.component.css']
})
export class ValitudComponent implements OnInit {

  inimesed: any[] = JSON.parse(localStorage.getItem("inimesed") || "[]")

  average = 0
  sum = 0

  constructor() { }

  ngOnInit(): void {
      this.inimesed.forEach(inim => this.sum = this.sum + inim.vanus);
      this.average = this.sum/this.inimesed.length;
  }


  lisa(inimene: any){
    this.inimesed.push(inimene);
    localStorage.setItem("inimesed", JSON.stringify(this.inimesed))
  }

  kustuta(id: any){
    const j2rjekorraNumber = this.inimesed.indexOf(id);
    this.inimesed.splice(j2rjekorraNumber,1);
    localStorage.setItem("inimesed", JSON.stringify(this.inimesed))
  }

  tyhjenda(){
    this.inimesed = [];
    localStorage.setItem("inimesed", JSON.stringify(this.inimesed))
  }

}
