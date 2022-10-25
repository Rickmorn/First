import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HomeComponent } from './home/home.component';
import { MeistComponent } from './meist/meist.component';
import { PoedComponent } from './poed/poed.component';
import { SeadedComponent } from './seaded/seaded.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "courses", component: CoursesComponent},
  {path: "hobbies", component: HobbiesComponent},
  {path: "work", component: WorkComponent},
  {path: "about", component: AboutComponent},
  {path: "seaded", component: SeadedComponent},
  {path: "meist", component: MeistComponent},
  {path: "poed", component: PoedComponent},
  {path: "**", redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
