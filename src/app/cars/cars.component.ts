import { Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  addCarStatus = false;
  cars = ['Ford','Audi', 'Tesla','Infinity','Kama'];
  // items = [{id: 3, name: 'item 2'},{id: 5, name: 'item 13'},{id: 2, name: 'item 666'}];
  inputText = '';
  inputText2 = '';
  carName = '';

  // constructor() {
  //   setTimeout(()=>{
  //     this.canAddCar = true;
  //   },4000)
  // }
  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  onKeyUp(value) {
    // console.log(event);
    this.inputText = value;
  }

  // onKeyUp2(event) {
  //
  //   // console.log(event);
  //   this.inputText2 = event.target.value;
  //   this.za = event.target.value;
  // }

  onKeyUp3(value) {
    // console.log(event);
    this.inputText2 = value;
  }


}
