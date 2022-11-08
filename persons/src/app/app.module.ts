import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValitudComponent } from './valitud/valitud.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { InimesedComponent } from './inimesed/inimesed.component';

@NgModule({
  declarations: [
    AppComponent,
    ValitudComponent,
    HomeComponent,
    InimesedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
