import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { MatDialog } from '@angular/material';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  constructor(private userService: UserService,public toastr: ToastrManager,private dialog: MatDialog) { }

  formSubmitted: boolean = false; // used for validating the form on form submit
  type='showTaskList'; // used for displaying the block of DOM
  todayDate = new Date(); // today date as minimum value for expiry date
  taskList: any = []; // for storing the task list in global vraiable
  taskObj: any = {}; // for form 

  ngOnInit() {
    this.getTaskLists();
  }

   /**
   * @param task Data form json
   * @output To add/edit tasks in db
   */
  addOrEditTask(taskData,type){
    this.formSubmitted = true;
    if (taskData.valid) {
      this.formSubmitted = false;
      if(type==='Create Task') {
        this.userService.addTask(taskData.value).subscribe((data:any) => {
          this.toastr.successToastr('Task Created Successfully', 'Success!');
          taskData.resetForm();
          this.type='showTaskList';
          this.getTaskLists();
        }, err => {
          console.log(err);
        });
      } else {
        taskData.value._id = this.taskObj._id;
        this.userService.editTask(taskData.value).subscribe((data:any) => {
          this.toastr.successToastr('Task Updated Successfully', 'Success!');
          taskData.resetForm();
          this.type='showTaskList';
          this.getTaskLists();
        }, err => {
          console.log(err);
        });
      }
    }
  }

  /**
   * @param 
   * @output To delete task in db
   */
  getTaskLists(){
    this.userService.getTaskLists().subscribe((data:any) => {
        this.taskList = data;
    }, err => {
      console.log(err);
    });
  }

  /**
   * @param data as json
   * @output for auto filling the form
   */
  editDetails(data) {
    this.taskObj = data;
    this.type="Edit Task"
  }

   /**
   * @param 
   * @output To delete task in db
   */
  deleteTask(data) {
    const dialogRef = this.dialog.open(DialogboxComponent, {
      width: '350px',
      disableClose: true,
      data: {
        type: 'Delete',
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.userService.deleteTask(data._id).subscribe((data: any) => {
            this.getTaskLists();
            this.toastr.successToastr('Task Deleted Successfully', 'Success!');
        }, err => {
          console.log(err);
        });
      }
    });
  }


 /**
   * @param task Data form json
   * @output To reset the form and to show the task list
   */
  cancelForm(taskData){
    this.formSubmitted = false;
    taskData.resetForm();
    this.type='showTaskList';
  }
}
