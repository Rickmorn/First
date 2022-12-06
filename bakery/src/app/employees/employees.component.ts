import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Users } from '../models/users.model';
import { Page } from '../models/page.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  private usersURL = "https://reqres.in/api/users";


  // users: Users[] = [];

  users: Users[] = []
  // page = ["https://reqres.in/api/users"];

  // page = [{
  //   "page":1,
  //   "per_page":6,
  //   "total":12,
  //   "total_pages":2,
  //   "data":[
  //     {"id":1,
  //     "email":"george.bluth@reqres.in",
  //     "first_name":"George",
  //     "last_name":"Bluth",
  //     "avatar":"https://reqres.in/img/faces/1-image.jpg"},
  //     {"id":2,
  //     "email":"janet.weaver@reqres.in",
  //     "first_name":"Janet",
  //     "last_name":"Weaver",
  //     "avatar":"https://reqres.in/img/faces/2-image.jpg"},
  //     {"id":3,
  //     "email":"emma.wong@reqres.in",
  //     "first_name":"Emma",
  //     "last_name":"Wong",
  //     "avatar":"https://reqres.in/img/faces/3-image.jpg"},
  //     {"id":4,
  //     "email":"eve.holt@reqres.in",
  //     "first_name":"Eve",
  //     "last_name":"Holt",
  //     "avatar":"https://reqres.in/img/faces/4-image.jpg"},
  //     {"id":5,"email":"charles.morris@reqres.in",
  //     "first_name":"Charles",
  //     "last_name":"Morris",
  //     "avatar":"https://reqres.in/img/faces/5-image.jpg"},
  //     {"id":6,
  //     "email":"tracey.ramos@reqres.in",
  //     "first_name":"Tracey",
  //     "last_name":"Ramos",
  //     "avatar":"https://reqres.in/img/faces/6-image.jpg"}
  //   ],
  //     "support":{"url":"https://reqres.in/#support-heading",
  //     "text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}
  //   ]
  
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.usersURL).subscribe(response => {
      this.users = response.data;
    })
  }

}
