import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
  }

  search(searchRepo:string){
    if(searchRepo !== ''){
      this.usersService.searchRepos(searchRepo)
      .subscribe((response:any)=>{
        console.log(response)
      });
    }
  
  }
}
