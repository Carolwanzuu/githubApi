import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {CapitalizePipe} from '../capitalize.pipe';


@Component({
  selector: 'app-my-repos',
  templateUrl: './my-repos.component.html',
  styleUrls: ['./my-repos.component.css']
})
export class MyReposComponent implements OnInit {

  myRepos:any[]=[];
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getMyRepos()
    .subscribe((response:any)=>{
      
      this.myRepos=response;
      
    })
  }
  }


