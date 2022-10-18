import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { CoursesComponent } from './courses/courses.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { SeadedComponent } from './seaded/seaded.component';
import { MeistComponent } from './meist/meist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    CoursesComponent,
    HobbiesComponent,
    AboutComponent,
    SeadedComponent,
    MeistComponent
  ],
  imports: [
    BrowserModule, // <--- *ngIf
    AppRoutingModule,  // <--- routerlink ja router-outlet
    FormsModule  // ngForm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
