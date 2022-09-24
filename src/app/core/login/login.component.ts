import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  userData: any = [];
  public loginForm: FormGroup | any;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // getter form form controls
  public get getvalue() {
    return this.loginForm['controls'];
  }

  /**
   * method for login
   */
  public login(): void {
    if (
      this.checkUserExistanceAndCreds().isUserExist &&
      this.checkUserExistanceAndCreds().isCredsMatched
    ) {
      localStorage.setItem('isLogin','true');
      this.router.navigate(
        ['user-profile', this.checkUserExistanceAndCreds().id]
      );
    } else {
      alert('Please check your credentials OR if you haven\'t register yet please register first!');
    }
  }

  private getAllUsers(): void {
    this.userService.getUsers().subscribe(
      (res: any) => {
        this.userData = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  private checkUserExistanceAndCreds(): any {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    let data: any = [];
    let isUserExist: boolean = true;
    let isCredsMatched: boolean = false;
    let id = null;
    data = this.userData.filter((data: any) => data.email == email);
    if (data.length == 0) {
      isUserExist = false;
    } else {
      if (data[0].email == email && data[0].password == password) {
        id = data[0].id
        isCredsMatched = true;
      }
    }
    return { isUserExist: isUserExist, isCredsMatched: isCredsMatched, id: id };
  }
}
