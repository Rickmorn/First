import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  uudis = "Juhtus selline asi...";
  uudiseSisu = "See on uudise sisu";
  onIngliseKeelne = false;
  ollakseHiiregaT2rniPeal = false;

  constructor() { }

  ngOnInit(): void {
  }

  hiiregaYleMinnes() {
    this.ollakseHiiregaT2rniPeal = true;
  }

  hiirega2raMinnes(){
    this.ollakseHiiregaT2rniPeal = false;
  }

  muudaInglisekeelseks() {
    this.uudis = "This thing happened...";
    this.uudiseSisu = "This is content of the news";
    this.onIngliseKeelne = true;
  }

  muudaMuukeelseks() {
    this.uudis = "asdjhfga lkiashtg kasjuhfgo...";
    this.uudiseSisu = "hjgdsfghgj dshjkgdgs dsjhbsd dfshgjkdfs";
    this.onIngliseKeelne = false;
  

  }
}
