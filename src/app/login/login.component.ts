import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router,public toastr: ToastrManager) { }

  error: any; // for displaying any login error in login page
  formSubmitted: boolean = false; // for validating the form

  ngOnInit() {
  }

  /**
  * @param login form json
  * @output To login user
  */
  logIn(userData) {
    this.formSubmitted = true;
    if (userData.valid) {
      this.formSubmitted = false;
      this.userService.logInUser(userData.value).subscribe((data:any) => {
        let userinfo = data;
        if (userinfo) {
          localStorage.setItem('currentUser', JSON.stringify(userinfo));
          localStorage.setItem('loggedIn', 'true');
          this.router.navigate(['/home/tasklist']);
          userData.resetForm();
        }
      }, err => {
        this.toastr.warningToastr(err.message, 'Success!');
      });
    }
  }

  // function that navigates the page to registration
  navigateToSignUp() {
    this.router.navigate(['/register']);
  }
}
