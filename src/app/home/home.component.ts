
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUserData: any; // for storing current logged in user data
  menuItems = [
    {link:'tasklist',description:'Tasks List'},
    {link:'expiredtask',description:'Expired Task'}
  ] // for storing menu items array

  constructor(private userService: UserService,private dialog: MatDialog) {
        if (!localStorage.getItem('currentUser')) {this.userService.logout(); }
  }

  ngOnInit() {
    this.currentUserData = this.userService.getUser();
  }

  /**
   * @output To logout session
   */
  logOut() {
    const dialogRef = this.dialog.open(DialogboxComponent, {
      width: '350px',
      disableClose: true,
      data: {
        type: 'Logout',
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.userService.logout();
      }
    });
  }
}


