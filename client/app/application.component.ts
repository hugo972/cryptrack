import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<h1>{{title}}</h1>`})
export class ApplicationComponent {
  public title = 'Hello Angular 2';
}