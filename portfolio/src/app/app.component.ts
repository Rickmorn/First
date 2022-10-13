import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CoursesComponent } from './courses/courses.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "courses", component: CoursesComponent},
  {path: "hobbies", component: HobbiesComponent},
  {path: "work", component: WorkComponent},
  {path: "**", redirectTo: ""},

]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
}
