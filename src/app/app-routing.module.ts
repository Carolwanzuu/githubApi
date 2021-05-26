import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {UserComponent} from './user/user.component';
import {RepositoriesComponent} from './repositories/repositories.component';

const routes: Routes = [
  {path: 'profile', component:ProfileComponent},
  {path: 'user', component:UserComponent},
  {path: 'repositories', component: RepositoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
