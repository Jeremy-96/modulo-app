import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewUserComponent } from './new-user/new-user.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path:'users/:id', component: SingleUserComponent },
  { path:'users', component: UserListComponent},
  { path:'signup', component: NewUserComponent},
  { path:'', component:LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
