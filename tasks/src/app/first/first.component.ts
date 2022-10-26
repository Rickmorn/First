import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  loend= ["üks","kaks","kolm","neli","viis","kuus","seitse","kaheksa","üheksa","kümme"]
  rand= ["shoes", "socks", "sweaters", "pigs", "goats", "sheep", "spray", "limit", "elite", "exubnerant", "destruction", "present", "March", "Jan", "Feb", "Dec"]

  constructor() { }

  ngOnInit(): void {
  }

  kustuta(kustutatavRand: string){
    const vahe = this.rand.indexOf(kustutatavRand);
    this.rand.splice(vahe,1)
  }

  remove_all(){
    this.rand=[];
  }

  sorteeriAZ() {
    this.rand  = this.rand.slice().sort();
  }
  sorteeriZA(){
    this.rand.sort().reverse();
  }

  filtreeri () {
    this.rand = this.rand.filter(rand => rand.length<=4);
  }

  lisa_sisu(vorm: NgForm){
    this.rand.push(vorm.value.random);

  }
}
