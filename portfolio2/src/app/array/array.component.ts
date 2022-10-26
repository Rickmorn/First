import { Component, OnInit } from '@angular/core';
import autodFailist from './autod.json';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  autod= ["bmw", "mercedes", "tesla", "audi", "opel", "volkswagen", "ford", "volvo"];

  constructor() { }

  ngOnInit(): void {
  }

lisa(auto: any){
  this.autod.push(auto);

}

}
