import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {map} from "rxjs/operators";
import {pipe} from "rxjs/internal-compatibility";



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:Http) {

  };

  getUsers(){
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')

  .pipe(
      map(response => response.json())
    )

  .pipe(map(response=> response.results))
  .pipe(map(users => {
    return users.map(u=>{
      return{
        name: u.name.first + ' ' + u.name.last,
        image: u.picture.large,
        geo: 'Adress: ' + u.location.city.toUpperCase() + ' ' +'PostCode: ' + u.location.postcode + ' , ' +u.location.state + ' ' +u.location.street
      }
    })
  }))
  }

  users = [
    {name: 'WFM 1'},
    {name: 'WFM 2'},
    {name: 'WFM 3'},
    {name: 'WFM 4'},
    {name: 'WFM 5'}
  ];
}
