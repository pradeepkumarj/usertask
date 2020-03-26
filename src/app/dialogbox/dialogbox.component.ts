import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

  ngOnInit() {
  }

  /**
   * function for calling when clicked on no for confirmation popup
   * output : returns no
   */
  onNoClick(): void {
    this.dialogRef.close('no');
  }
  /**
   * function for calling when clicked on yes for confirmation popup
   * output : returns yes
   */
  onYesClick(): void {
    this.dialogRef.close('yes');
  }
}
