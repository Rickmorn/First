import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yksik-inimene',
  templateUrl: './yksik-inimene.component.html',
  styleUrls: ['./yksik-inimene.component.css']
})
export class YksikInimeneComponent implements OnInit {

  leitudInimene: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const inimesed = JSON.parse(localStorage.getItem("inimesed") || "[]")
    const index = Number(this.route.snapshot.paramMap.get("j2rjekorraNumber"));
    this.leitudInimene = inimesed[index];
  }



}
