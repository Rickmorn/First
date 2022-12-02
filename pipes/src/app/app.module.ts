import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumbersComponent } from './numbers/numbers.component';
import { PeopleComponent } from './people/people.component';
import { MultiplyPipe } from './multiply.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';
import { CountrycodePipe } from './people/countrycode.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NumbersComponent,
    PeopleComponent,
    MultiplyPipe,
    ShortenPipe,
    CountrycodePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
