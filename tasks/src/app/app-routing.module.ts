import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FifthComponent } from './fifth/fifth.component';
import { FirstComponent } from './first/first.component';
import { FourthComponent } from './fourth/fourth.component';
import { HaldaTooteidComponent } from './halda-tooteid/halda-tooteid.component';
import { HomeComponent } from './home/home.component';
import { MuudaToodeComponent } from './muuda-toode/muuda-toode.component';
import { SeadedComponent } from './seaded/seaded.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { YksikToodeComponent } from './yksik-toode/yksik-toode.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "first", component: FirstComponent},
  {path: "second", component: SecondComponent},
  {path: "third", component: ThirdComponent},
  {path: "fourth", component: FourthComponent},
  {path: "fifth", component: FifthComponent},
  {path: "toode/:j2rjekorraNumber", component: YksikToodeComponent},
  {path: "seaded", component: SeadedComponent},
  {path: "halda", component: HaldaTooteidComponent},
  {path: "muuda/:j2rjekorraNumber", component: MuudaToodeComponent},
  {path: "**", redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
