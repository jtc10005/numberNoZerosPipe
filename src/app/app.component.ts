import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers : [DecimalPipe]
})
export class AppComponent  {
  name = 'Angular 6';
 segment;
  


  constructor(private decPipe : DecimalPipe){
    this.segment = '15.200'
  }
}
