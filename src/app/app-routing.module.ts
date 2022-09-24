import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { ChangeUserPasswordComponent } from './user/change-user-password/change-user-password.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { UserProfileInfoComponent } from './user/user-profile-info/user-profile-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterUserComponent,
  },
  {
    path: 'register-user/:id',
    component: RegisterUserComponent,
  },
  {
    path: 'user-profile',
    component: UserProfileInfoComponent,
  },
  {
    path: 'user-profile/:id',
    component: UserProfileInfoComponent,
  },
  {
    path: 'change-password',
    component: ChangeUserPasswordComponent,
  },
  {
    path: 'change-password/:id',
    component: ChangeUserPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
