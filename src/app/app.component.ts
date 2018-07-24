import { Component } from '@angular/core';
import {UsersService} from "./user/users.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {
  title = 'firstProject';

  users = [];
  constructor(private usersService: UsersService) {

    // this.users = this.usersService.users
  }
  ngOnInit(){
    //this.users = this.usersService.users
    this.usersService.getUsers().subscribe(users=>{
      //console.log(users);
      this.users = users
    });
  }

}
