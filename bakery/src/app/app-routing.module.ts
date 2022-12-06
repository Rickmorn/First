import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: "", redirectTo: "/products", pathMatch: "full"},
  {path: "products", component: ProductsComponent},
  {path: "employees", component: EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
