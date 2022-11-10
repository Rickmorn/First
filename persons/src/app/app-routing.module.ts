import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InimesedComponent } from './inimesed/inimesed.component';
import { MuudaInimeneComponent } from './muuda-inimene/muuda-inimene.component';
import { UusInimeneComponent } from './uus-inimene/uus-inimene.component';
import { ValitudComponent } from './valitud/valitud.component';
import { YksikInimeneComponent } from './yksik-inimene/yksik-inimene.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "valitud", component: ValitudComponent},
  {path: "inimesed", component: InimesedComponent},
  {path: "uus_inimene", component: UusInimeneComponent},
  {path: "inimene/:j2rjekorraNumber", component: YksikInimeneComponent},
  {path: "muuda/:j2rjekorraNumber", component: MuudaInimeneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
