import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-change-user-password',
  templateUrl: './change-user-password.component.html',
  styleUrls: ['./change-user-password.component.scss'],
})
export class ChangeUserPasswordComponent implements OnInit {
  id: any; //to store querypram id
  userInfo: any = {};
  oldPassword: string;
  newPassword: string;
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    this.oldPassword = '';
    this.newPassword = '';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.id = data.id;
    });
    this.getProfileInfo();
  }

  /**
   * method for get single user profile data
   */
  private getProfileInfo(): void {
    this.userService.getUserById(Number(this.id)).subscribe(
      (res: any) => {
        this.userInfo = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  /**
   * method for change password
   * @returns
   */
  public changePassword(): void {
    if (this.oldPassword != this.userInfo.password) {
      alert('Old password is wrong ...!');
      return;
    }
    this.userService
      .patchProfile(Number(this.id), { password: this.newPassword })
      .subscribe((res: any) => {
        alert('Password Updated uccessfully !');
      });
  }
}
