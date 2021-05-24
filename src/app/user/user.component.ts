import { Component, OnInit } from '@angular/core';
//import {UsersService} from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any[]=[];

  // constructor( private usersService:UsersService) { }

  // ngOnInit() {
  //   this.usersService.getUsers()
  //   .subscribe((response:any)=>{
  //     console.log('Users',response);
  //     this.users=response.object;
  //   })

  // }

}
