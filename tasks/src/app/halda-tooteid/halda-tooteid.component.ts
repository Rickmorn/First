import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-halda-tooteid',
  templateUrl: './halda-tooteid.component.html',
  styleUrls: ['./halda-tooteid.component.css']
})
export class HaldaTooteidComponent implements OnInit {

  tooted = JSON.parse(localStorage.getItem("tooted") || "[]");

  constructor() { }

  ngOnInit(): void {
  }

  kustuta(index: number){
      this.tooted.splice(index, 1);
      localStorage.setItem("tooted", JSON.stringify(this.tooted));

  }


}
