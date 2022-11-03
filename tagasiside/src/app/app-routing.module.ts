import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { TagasisideAndjaComponent } from './tagasiside-andja/tagasiside-andja.component';
import { TagasisideComponent } from './tagasiside/tagasiside.component';
import { TagasisideandjadComponent } from './tagasisideandjad/tagasisideandjad.component';

const routes: Routes = [
  {path: "", component: AvalehtComponent},
  {path: "tagasiside", component: TagasisideComponent},
  {path: "tagasisideAndjad", component: TagasisideandjadComponent},
  {path: "andja/:index", component: TagasisideAndjaComponent},
  {path: "**", redirectTo: ""},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
