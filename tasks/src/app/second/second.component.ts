import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  loend= ["üks","kaks","kolm","neli","viis","kuus","seitse","kaheksa","üheksa","kümme"]
  rand= ["shoes", "socks", "sweaters", "pigs", "goats", "sheep", "spray", "limit", "elite", "exubnerant", "destruction", "present", "March", "Jan", "Feb", "Dec"]

  constructor() { }

  ngOnInit(): void {
  }

}
