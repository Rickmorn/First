import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { YksikToodeComponent } from './yksik-toode/yksik-toode.component';
import { SeadedComponent } from './seaded/seaded.component';
import { HaldaTooteidComponent } from './halda-tooteid/halda-tooteid.component';
import { MuudaToodeComponent } from './muuda-toode/muuda-toode.component';
import { PersonsComponent } from './persons/persons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    YksikToodeComponent,
    SeadedComponent,
    HaldaTooteidComponent,
    MuudaToodeComponent,
    PersonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // ngForm
    ReactiveFormsModule, // formsGroup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
