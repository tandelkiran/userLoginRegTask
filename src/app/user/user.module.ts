import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserProfileInfoComponent } from './user-profile-info/user-profile-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeUserPasswordComponent } from './change-user-password/change-user-password.component';


@NgModule({
  declarations: [RegisterUserComponent, UserProfileInfoComponent, ChangeUserPasswordComponent],
  imports: [CommonModule, UserRoutingModule,FormsModule, ReactiveFormsModule],
})
export class UserModule {}
