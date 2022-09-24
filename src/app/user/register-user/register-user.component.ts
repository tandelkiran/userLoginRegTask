import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  public id: any; // for param id
  userForm: FormGroup | any;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.id = data.id;
    });
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      dob: [''],
      address: [''],
      userName: [''],
      password: [''],
      gender: [''],
      id: [''],
    });

    this.getProfileInfo();
  }

  /**
   * method for get user-detail
   */
  private getProfileInfo(): void {
    this.userService.getUserById(Number(this.id)).subscribe(
      (res: any) => {
        this.userForm.patchValue(res);
        console.log('bbb=>', this.userForm.value);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  /**
   * method for add/update user based on id set
   */
  public submitForm(): void {
    console.log('ff--', this.userForm.value);
    if (!this.id) {
      this.registerUser();
    } else {
      this.updateProfile();
    }
  }

  /**
   * method for register new user
   */
  private registerUser(): void {
    this.userService.registerUser(this.userForm.value).subscribe((res: any) => {
      alert('User Registration Done !');
      this.router.navigate(['login']);
    });
  }

  /**
   * method for update user profile
   */
  private updateProfile() {
    this.userService
      .updateProfile(Number(this.id), this.userForm.value)
      .subscribe((res: any) => {
        this.router.navigate(['user-profile', this.id]);
        alert('User Profile Updated !');
      });
  }
}
