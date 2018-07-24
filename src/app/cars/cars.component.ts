import { Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  carName = '';
  carYear = 2017;
  cars = [{name: 'Ford', year: 2007}, {name: 'Mazda', year: 2001}, {name: 'Audi', year: 2003}];
  constructor() {
  }
  addCar() {
    this.cars.push({
      name: this.carName,
      year: this.carYear
    });
    // this.carName = '';
    // this.carYear = 2017;
  }
}
