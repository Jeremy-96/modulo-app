import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUserComponent } from './auth-user/auth-user.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path:'users', component: UserListComponent},
  { path:'signin', component: AuthUserComponent},
  { path:'signup', component: NewUserComponent},
  { path:'', component:LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
