import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {SearchComponent} from './search/search.component';
import {RepositoriesComponent} from './repositories/repositories.component';

const routes: Routes = [
  {path: 'profile', component:ProfileComponent},
  {path: 'search', component:SearchComponent},
  {path: 'repositories', component: RepositoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
