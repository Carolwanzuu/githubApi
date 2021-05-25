import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  otherUser:any=[];
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    
      this.usersService.getOtherUser()
      .subscribe((response:any)=>{
        
        this.otherUser=response;
        console.log("Username", this.otherUser)
      })
    }
  
  }
  
