import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  kogus = 5;
  liked = false;

  constructor() { }

  ngOnInit(): void {
  }

  zero () {
    this.kogus = 0;
  }
  vahenda () {
    this.kogus = this.kogus - 1;
  }
  suurenda () {
    this.kogus = this.kogus + 1;
  }

  muudaLike(uusVaartus: any){
    this.liked = uusVaartus;
  }
}
