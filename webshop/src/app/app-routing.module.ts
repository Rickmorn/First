import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { MaintainProductsComponent } from './admin/maintain-products/maintain-products.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "admin", component: AdminhomeComponent},
  {path: "cart", component: CartComponent},
  {path: "product/:id", component: SingleProductComponent},
  {path: "admin/add", component: AddProductComponent},
  {path: "admin/edit/:id", component: EditProductComponent},
  {path: "admin/maintain", component: MaintainProductsComponent},
  {path: "**", component: NotFoundComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
