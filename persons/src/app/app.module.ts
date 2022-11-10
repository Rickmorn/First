import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValitudComponent } from './valitud/valitud.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InimesedComponent } from './inimesed/inimesed.component';
import { UusInimeneComponent } from './uus-inimene/uus-inimene.component';
import { YksikInimeneComponent } from './yksik-inimene/yksik-inimene.component';
import { MuudaInimeneComponent } from './muuda-inimene/muuda-inimene.component';

@NgModule({
  declarations: [
    AppComponent,
    ValitudComponent,
    HomeComponent,
    InimesedComponent,
    UusInimeneComponent,
    YksikInimeneComponent,
    MuudaInimeneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
