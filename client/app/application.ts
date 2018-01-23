import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApplicationComponent }  from './application.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ApplicationComponent
  ],
  bootstrap: [ ApplicationComponent ]
})
class ApplicationModule { }

platformBrowserDynamic().bootstrapModule(ApplicationModule);