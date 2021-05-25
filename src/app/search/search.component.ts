import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  otherUsers:any=[];
  constructor(private usersService:UsersService) { }

  searchUser(submittedName:string){
      console.log(submittedName);
  }

  ngOnInit(): void {
    
      this.usersService.getOtherUser()
      .subscribe((response:any)=>{
        
        this.otherUsers=response;
        console.log("Username", this.otherUsers)
      })
    }
  
  }
  
