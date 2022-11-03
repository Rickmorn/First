import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { TagasisideComponent } from './tagasiside/tagasiside.component';
import { TagasisideandjadComponent } from './tagasisideandjad/tagasisideandjad.component';
import { TagasisideAndjaComponent } from './tagasiside-andja/tagasiside-andja.component';

@NgModule({
  declarations: [
    AppComponent,
    AvalehtComponent,
    TagasisideComponent,
    TagasisideandjadComponent,
    TagasisideAndjaComponent
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
