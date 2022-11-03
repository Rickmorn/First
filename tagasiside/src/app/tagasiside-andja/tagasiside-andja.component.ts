import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import hindajadFailist from './tagasisideandjad.json';

@Component({
  selector: 'app-tagasiside-andja',
  templateUrl: './tagasiside-andja.component.html',
  styleUrls: ['./tagasiside-andja.component.css']
})
export class TagasisideAndjaComponent implements OnInit {

  hindajad = hindajadFailist

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const index=Number(this.route.snapshot.paramMap.get("index"));
    this.hindajad = tagasisideAndjad[index]
  }

}
