import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Car } from "src/app/models/car";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl= "https://localhost:44371/api/cars/getall";
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<Car[]>{
    return this.httpClient.get<Car[]>(this.apiUrl);
  }
}
