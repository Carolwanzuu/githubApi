import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {UsersClass} from './user/users-class';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users:UsersClass;
  usersClass: any;
  
  

  constructor(private http:HttpClient) {
    this.users = new UsersClass("","");
   }


  //  usersService(){
  //    interface ApiResponse{
  //      name:string;
  //      description:string;
  //    }
  //    let promise = new Promise((resolve,reject)=>{
  //      this.http.get<ApiResponse>("https://api.github.com/users/carolwanzuu?access_token=${environment.githubApiKey}").toPromise().then(response=>{
  //         this.usersClass.name =response.name
  //         this.usersClass.description = response.description

  //         resolve("")
  //      },
  //      error=>{
  //        this.usersClass.name = "Carol"
  //        this.usersClass.description = "wrong destination"

  //        reject(error)
  //      }
  //      )
  //    })
  //    return promise
  //  }

   //personal profile url endpoints

  getProfile(){
    return this.http.get(`https://api.github.com/users/carolwanzuu`)
     
  }

  getMyRepos(){
    return this.http.get(`https://api.github.com/users/carolwanzuu/repos`)
     
  }

  //getting repos url

  repos = new BehaviorSubject<any>([])
  getUsersRepos(){
    return this.http.get(`https://api.github.com/search/repositories?q={query}`)
    .subscribe((response:any) =>{
      this.repos.next(response.items);
    });
  }

  searchForARepo(repoName:string){
    return this.http.get(`https://api.github.com/search/repositories?q={${repoName}}`) 
    .subscribe( (response:any) => {
      this.repos.next(response.items)
    });
  }

  getRepos(){
    return this.repos.asObservable();
  };



  //getting users url

  //otherUsers = new BehaviorSubject<any>([])
  otherUsers = new BehaviorSubject<any>([])
  getdiffUser(){
    return this.http.get(`https://api.github.com/search/users?q={query}`)
    .subscribe((response:any) =>{
      this.otherUsers.next(response.items);
    });
  }
  searchForUsers(userName:string){
    return this.http.get(`https://api.github.com/search/users?q={${userName}}`) 
    .subscribe( (response:any) => {
      this.otherUsers.next(response.items)
    });
  }
  getUsers(){
    return this.otherUsers.asObservable();
  };

}




    //   searchRepos(){
//     return this.http.get(`https://api.github.com/search/repositories`)
    
//   }
//   getOtherUser(){
//     return this.http.get(`https://api.github.com/users`)
//   }
// }


//https://api.github.com/users/carolwanzuu?access_token=${environment.githubApiKey}`
//https://api.github.com/search/users?access_token=${environment.githubApiKey}
//(`https://api.github.com/search/repositories?q={${repoName}}`)
//.subscribe((response:any)=>{
 // this.repos.next(response.data)})
