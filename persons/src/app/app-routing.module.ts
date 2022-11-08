import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InimesedComponent } from './inimesed/inimesed.component';
import { ValitudComponent } from './valitud/valitud.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "valitud", component: ValitudComponent},
  {path: "inimesed", component: InimesedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
