import { Component } from '@angular/core';
import{Producto} from '../../classes/Producto'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent  { 
  name = 'LOZA'; 
  producto : Producto = new Producto(
    1, 'Papa', 1, 3, 'Papas para freir'
  );
}
