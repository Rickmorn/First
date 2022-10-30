import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tagasiside',
  templateUrl: './tagasiside.component.html',
  styleUrls: ['./tagasiside.component.css']
})
export class TagasisideComponent implements OnInit {

  hinnang = ["Oli hea", "Huvitav", "Teistsugune", "Põnev"];



  constructor() { }

  ngOnInit(): void {
  }


  kustuta(klikitudHinne: string){
    this.hinnang.splice(this.hinnang.indexOf(klikitudHinne),1)
  }

  lisa(vorm: NgForm){
    this.hinnang.push(vorm.value.hinne);
  
  }

}
