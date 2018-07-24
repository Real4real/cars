import {Component} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent{
  // carName = 'Ford';
  // carYear = 987;

  @Input() carItem: {name, year};

  // getName() {
  //   return this.carName;
  // }

}
