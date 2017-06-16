import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hola Maicol {{name}}</h1>
  <h2>Mi primer componente.</h2>`,
})
export class AppComponent  { name = 'LOZA'; }
