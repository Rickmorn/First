import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-muuda-toode',
  templateUrl: './muuda-toode.component.html',
  styleUrls: ['./muuda-toode.component.css']
})
export class MuudaToodeComponent implements OnInit {

  leitudToode = "";
  index = Number(this.route.snapshot.paramMap.get("j2rjekorraNumber"));
  tooted = JSON.parse(localStorage.getItem("tooted") || "[]");
  // kasutan siin sest need on kasutusel mitmes funtksioonis
  muutmiseVorm!: FormGroup;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.leitudToode = this.tooted[this.index];
    
    this.muutmiseVorm = new FormGroup({
      "nimi": new FormControl(this.leitudToode)
    });
  }

  muuda(vorm: FormGroup){
    this.tooted[this.index] = vorm.value.nimi;
    localStorage.setItem("tooted", JSON.stringify(this.tooted));

  }
}

// 1. Muutja reale 9, mis hoiab enda sees toote nime, aga alguses on v22rtus tyhi
// 2. constructorisse teen v8imekuse v8tmaks URL parameetrit (inport ka!)
// 3. ngOnInit sisse teen uue lokaalse muutuja (const), mis v8tab enda sisse route kaudu URL parameetri
// 4. teen ta numbriks, kuna URL parameetrid tulevad k8ik alati jutum2rkidena
// 5. v8tan k8ik tooted localStorage-st
// 6. otsin 8ige toote k8ikide toote muutujast yles
// 7. kuvan ta HTML-is





// const index = Number(this.route.snapshot.paramMap.get("j2rjekorraNumber"));
// const tooted = JSON.parse(localStorage.getItem("tooted") || "[]"); 
// Miks siia? Mitte k8ige yles? Sest teda ei kasuta HMTLs v8i kahes v8i enamas funktsioonis