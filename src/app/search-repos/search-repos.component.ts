import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-search-repos',
  templateUrl: './search-repos.component.html',
  styleUrls: ['./search-repos.component.css']
})
export class SearchReposComponent implements OnInit {



  constructor(private userService:UsersService) { }

  ngOnInit(): void {
}
  searchRepos(repoName:string){
    if(repoName !== ''){
      this.userService.searchForARepo(repoName)
    }

  }

}
