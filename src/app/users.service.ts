import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {UsersClass} from './user/users-class';

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



  getProfile(){
    return this.http.get(`https://api.github.com/users/carolwanzuu`);
  }

  getRepos(repoName:string){
    return this.http.get(`https://api.github.com/search/repositories?q={${repoName}}`)
  }
}
//https://api.github.com/users/carolwanzuu?access_token=${environment.githubApiKey}`
//https://api.github.com/search/users?access_token=${environment.githubApiKey}