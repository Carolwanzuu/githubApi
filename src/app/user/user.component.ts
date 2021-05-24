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

   user:any[]=[];

  constructor( private usersService:UsersService) { }

  ngOnInit() {
    this.usersService.getProfile()
    .subscribe((response:any)=>{
      
      this.users=response.object;
    })

  }

  // constructor(private usersService:UsersService,private http:HttpClient){
  //   this.users = usersService.getUsers()
  // }
  // ngOnInit(){
  //   interface ApiResponse{
  //     name:string;
  //     description:string;
  //   }
  //  this.http.get<ApiResponse>("https://api.github.com/users/carolwanzuu?access_token=${environment.githubApiKey}").subscribe(object=>{
  //    this.users = new UsersClass(object.name, object.description)
  //  })
  
  // }

}