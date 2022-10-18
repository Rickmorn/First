import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  aadress = "Aadress";
  telefoninumber = "Telefoninumber";
  email = "Email";
  onInglisekeelne = false;


  muudaInglisekeelseks(){
    this.aadress="Address";
    this.telefoninumber="Phone number";
    this.email="Email";
    this.onInglisekeelne= true;
  }

  

  


  constructor() { }

  ngOnInit(): void {
  }

}
