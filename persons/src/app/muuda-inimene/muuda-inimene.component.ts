import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-muuda-inimene',
  templateUrl: './muuda-inimene.component.html',
  styleUrls: ['./muuda-inimene.component.css']
})
export class MuudaInimeneComponent implements OnInit {
  leitudInimene: any;
  private index = Number(this.route.snapshot.paramMap.get("j2rjekorraNumber"));
  private inimesed = JSON.parse(localStorage.getItem("inimesed") || "[]");
  muutmiseVorm!: FormGroup;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.leitudInimene = this.inimesed[this.index];
    this.muutmiseVorm = new FormGroup({
      "id": new FormControl(this.leitudInimene.id),
      "name": new FormControl(this.leitudInimene.name),
      "username": new FormControl(this.leitudInimene.username),
      "email": new FormControl(this.leitudInimene.email),
      "vanus": new FormControl(this.leitudInimene.vanus),

    })
  }


  muuda(vorm: FormGroup){
    this.inimesed[this.index] = vorm.value;
    localStorage.setItem("inimesed", JSON.stringify(this.inimesed));

  }
}
