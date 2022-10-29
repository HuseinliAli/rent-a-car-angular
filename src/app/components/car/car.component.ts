import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1:any = {carId:1, carName:"Mercedes", carPrice:40.7};
  car2:any = {carId:2, carName:"BMW", carPrice:40.7};
  car3:any = {carId:3, carName:"Lada", carPrice:40.7};
  car4:any = {carId:4, carName:"Toyota", carPrice:40.7}

  cars = [this.car1, this.car2, this.car3, this.car4];
  constructor() { }

  ngOnInit(): void {
  }

}
