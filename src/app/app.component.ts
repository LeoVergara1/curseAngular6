import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app my app';

  openDialog() {
    console.log("Dandon click");
  }

  tryPrintScaleValue() {
    console.log("Cambiando....")
  } 
}
