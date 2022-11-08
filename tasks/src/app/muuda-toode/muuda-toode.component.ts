import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-muuda-toode',
  templateUrl: './muuda-toode.component.html',
  styleUrls: ['./muuda-toode.component.css']
})
export class MuudaToodeComponent implements OnInit {
  // 1. Tehakse v2lja leitudToode muutuja, mille v22rtust ei anta
  // ehk tal ei ole v8rdum2rki taga (ta on tyhjus), ta ootab enda sisse
  // objekti, kuna tal on tyybiks any (kooloni abil annan tyybi)
  leitudToode: any;
  // 2. private - seda muutjuat ei kasutata HTML-s
  // SEST k8ik muud muutujad j2relikult on kasutusel HMTL-s
  // private eesliidesega on kasutusel kahes v8i enamas funktsioonis 
  // ehk t99tab TS-s ja mitte HTMLs.
  // 4. route kaudu v8tame snapshoti ja selle kyljest paraMap ja selle kyljest get
  // (see on Angulari poolt paika pandud), get sulgude sisse pean kirjutama muutuja
  // mis on app-routing.module.ts sees URL-s kooloni taga
  // kuna alati tulevad URL-i muutujad s9nalisel kujul, pean teisendama numbriks
  private index = Number(this.route.snapshot.paramMap.get("j2rjekorraNumber"));
  // 5. v8tame tooted localStorage seest v8tme "tooted" abil ja kui seal on tyhjus
  //  ehk seda v8tit ei ole, siis v8tame tyhja array - []
  private tooted = JSON.parse(localStorage.getItem("tooted") || "[]");
  //                kasutan siin sest need on kasutusel mitmes funtksioonis
  // 6. loon uue tyhja muutuja tyybist FormGroup, mis saab v22rtuse ngOnInit sees
  // kus talle antakse v8rdusm2rgiga l8puks v22rtus
  muutmiseVorm!: FormGroup;

  // 3. Tekitatakse uus muutjua nimega route
  // saab v22rtuse l2bi node_modules kausta v8ttes enda sisse faili ActivatedRoute
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // 7. anna leitudToode muutujale v22rtuse (enne oli tyhjus)
    this.leitudToode = this.tooted[this.index];
    // 8. anna muutmiseVorm muutujale v22rtuse (enne oli tyhjus)
    // new FormGroup ehk tehakse uus vorm, millele antakse v8ti-v22rtus paaridena
    this.muutmiseVorm = new FormGroup({
      "nimi": new FormControl(this.leitudToode.nimi),
      "hind": new FormControl(this.leitudToode.hind),
      "pilt": new FormControl(this.leitudToode.pilt)
    });
  }

  muuda(vorm: FormGroup){
    this.tooted[this.index] = vorm.value;
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