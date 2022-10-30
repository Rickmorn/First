import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import hindajadFailist from './tagasisideandjad.json';


@Component({
  selector: 'app-tagasisideandjad',
  templateUrl: './tagasisideandjad.component.html',
  styleUrls: ['./tagasisideandjad.component.css']
})
export class TagasisideandjadComponent implements OnInit {

  hindajad = hindajadFailist

  constructor() { }

  ngOnInit(): void {
  }

  mstart(){
    this.hindajad = this.hindajad.filter(hindajad => hindajad.startsWith("M"));

  }

  sixLetter(){
    this.hindajad = this.hindajad.filter(hindajad => hindajad.length === 6 );

  }

  yend(){
    this.hindajad = this.hindajad.filter(hindajad => hindajad.endsWith("y"));

  }

  sortAZ(){
    this.hindajad.sort();

  }


  sortZA(){
    this.hindajad.sort().reverse();

  }

  addEST(){
    this.hindajad = this.hindajad.map(hindaja => "EST" + hindaja);

  }

  kustuta(kustutatavHindaja: string){
    const j2rjekorraNumber = this.hindajad.indexOf(kustutatavHindaja);
    this.hindajad.splice(j2rjekorraNumber,1);

  }

  lisa(vorm: NgForm){
this.hindajad.push(vorm.value.hindaja);

  }
}
