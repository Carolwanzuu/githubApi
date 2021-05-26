import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {HttpClient} from '@angular/common/http';

import {UsersClass} from '../user/users-class';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:UsersClass;

   otherUsers:any[]=[];

  constructor( private usersService:UsersService) { }

  ngOnInit() {
    this.usersService.getdiffUser();
    this.usersService.getUsers()
    .subscribe((response:any)=>{
      this.otherUsers=response
      console.log("UsersList-component",this.otherUsers);
    })
    }

}

 

