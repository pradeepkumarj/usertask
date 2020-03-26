import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-expiredtask',
  templateUrl: './expiredtask.component.html',
  styleUrls: ['./expiredtask.component.css']
})
export class ExpiredtaskComponent implements OnInit {

  constructor(private userService: UserService) { }

  expiredTaskList: any = []; // for storing ecxpired task list in global variable
  ngOnInit() {
    this.getExpiredTaskLists();
  }

    /**
   * @param 
   * @output To delete task in db
   */
  getExpiredTaskLists(){
    this.userService.getExpiredTaskLists().subscribe((data:any) => {
        this.expiredTaskList = data;
    }, err => {
      console.log(err);
    });
  }
}
