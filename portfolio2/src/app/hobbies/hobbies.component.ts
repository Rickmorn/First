import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  sonum = "Lisa uus hobi!"


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.sonum= "Uus hobi lisatud!"
  }

}
