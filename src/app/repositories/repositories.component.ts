import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repos:any=[];

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsersRepos();
    this.usersService.getRepos()
    .subscribe((response:any)=>{
      this.repos=response
      console.log(this.repos);
    })

  }
}
  
  
    
    
  
