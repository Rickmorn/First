import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yksik-toode',
  templateUrl: './yksik-toode.component.html',
  styleUrls: ['./yksik-toode.component.css']
})
export class YksikToodeComponent implements OnInit {

  leitudToode: any;  // l2heb HTML-i

  // 1. mul on vaja leida KÕIK tooted
  // 2. mul on vaja midagi unikaalset toote kohta
  //    mille abil seda (URL-s)
  // 3. selle unikaalse tunnuse abil leian
  //    selle üles enda toodete hulgast


  // constructor on node_module-st failide yhendamiseks
  constructor(private route: ActivatedRoute) { }


  //k2imamineku funktsioon
  ngOnInit(): void {
    const tooted = JSON.parse(localStorage.getItem("tooted") || "[]");
    const index = Number(this.route.snapshot.paramMap.get("j2rjekorraNumber"));
    this.leitudToode = tooted[index];
  }

}
