import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  kogus = 5;
  liked = false;
  sonum="";

  constructor() { }

  ngOnInit(): void {
    console.log("home")
  }

  zero () {
    this.kogus = 0;
    this.sonum = "Nullitud"
  }
  vahenda () {
    this.kogus = this.kogus - 1;
    this.sonum = "Kogus vahendatud"
  }
  suurenda () {
    if (this.kogus === 10) { // sulgude sees on avaldis, miks k[sib kas on t]ene
      this.sonum = "Maksimum kogus on 10"; // toene blokk
    } else {
    this.kogus = this.kogus + 1; // vaar blokk
    this.sonum = "Kogus suurendatud"
    }
  }

  muudaLike(uusVaartus: any){
    this.liked = uusVaartus;
  }
}
