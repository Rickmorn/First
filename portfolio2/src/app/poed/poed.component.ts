import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import poedFailist from './poed.json';

@Component({
  selector: 'app-poed',
  templateUrl: './poed.component.html',
  styleUrls: ['./poed.component.css']
})
export class PoedComponent implements OnInit {
  // dunaamilist listi saab kohendada
  poed = poedFailist;

// list, array ehk est kl massiiv

  constructor() { }

  ngOnInit(): void {
  }

  sorteeriAZ() {
    this.poed  = this.poed.slice().sort();
  }
  sorteeriZA(){
    this.poed.sort().reverse();
  }
  filtreeri () {
    this.poed = this.poed.filter(pood => pood.includes("mäe"));
  }

  muudaK6iki(){
    this.poed = this.poed.map(pood => "--" + pood);
  }

  originaali(){
    this.poed = poedFailist;
  }

  kustuta(kustutatavPood: string){
    //                     =["Mustamäe", "Kristiine"].indexOf("Kristiine");
    const j2rjekorraNumber = this.poed.indexOf(kustutatavPood);
    // ["Mustamäe", "Kristiine"].splice(1,1);
    this.poed.splice(j2rjekorraNumber,1);
  }

  lisa(vorm: NgForm){
    this.poed.push(vorm.value.pood);
  }

  tyhjenda(){
    this.poed=[];
  }

  sorteeriKasvavalt(){
    this.poed.sort((a,b) => a.length - b.length);
  }


}
