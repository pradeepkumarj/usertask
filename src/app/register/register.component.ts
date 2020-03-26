import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, public toastr: ToastrManager) { }

  formSubmitted: boolean = false; // for validating the form
  ngOnInit() {
  }

  /**
  * @param register form json
  * @output To register user
  */
  registerUser(userData) {
    this.formSubmitted = true;
    if (userData.valid) {
      this.formSubmitted = false;
      this.userService.signUpUser(userData.value).subscribe((data:any) => {
        userData.resetForm();
        this.toastr.successToastr('User Registered Successfully & Logged In.', 'Success!');
        let userinfo = data;
        if (userinfo) {
          localStorage.setItem('currentUser', JSON.stringify(userinfo));
          localStorage.setItem('loggedIn', 'true');
          this.router.navigate(['/home/tasklist']);
        }
      }, err => {
        console.log(err);
      });
    }
  }

  // function that navigates the page to Login
  navigateToLogin() {
    this.router.navigate(['']);
  }
}
