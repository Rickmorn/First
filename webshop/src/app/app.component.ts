import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webshop';
  activeLanguage = localStorage.getItem("language") || "en";

  constructor(private translate: TranslateService) {
    // translate.setDefaultLang('en');
    translate.use(localStorage.getItem("language") || 'en');
    translate.use(localStorage.getItem("language") || 'fr');
  }
 
  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem("language", language);
    this.activeLanguage = language;
  }
  
}
