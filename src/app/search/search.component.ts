import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 
  constructor(private usersService:UsersService) { }

  
  ngOnInit(): void {
  }

  searchUsers(userName:string){
    if(userName !== ''){
      this.usersService.searchForUsers(userName)
    }
}
}
