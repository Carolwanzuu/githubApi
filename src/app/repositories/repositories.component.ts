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
  
  }
  search(searchRepo:string){
    if(searchRepo !== ''){
  //     this.usersService.searchRepos(searchRepo)
  //     .subscribe((response:any)=>{
  //       console.log('Search Data',response)
  this.usersService.searchRepos()
    .subscribe((response:any)=>{

      this.repos = response;
      console.log("repositories", this.repos)
    })
  }

      
  };
}
    
    
  

