import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-profile-info',
  templateUrl: './user-profile-info.component.html',
  styleUrls: ['./user-profile-info.component.scss'],
})
export class UserProfileInfoComponent implements OnInit {
  id: any; //to store querypram id
  userInfo: any = {};

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

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
   * method for navigate to edit register page with query param id
   */
  public goToEdit(): void {
    this.router.navigate(['register-user', this.id]);
  }

  /**
   * method for navigate to edit register page with query param id
   */
  public goToChangePassword(): void {
    this.router.navigate(['change-password', this.id]);
  }
}
