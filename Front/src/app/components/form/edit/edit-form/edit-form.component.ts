import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormService } from 'src/app/back/services/form.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  formData: any = {};

  constructor(
    private dialogRef: MatDialogRef<EditFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formService: FormService // Add this line

  ) {
    this.formData = { ...data.formData };
  }

  ngOnInit() {
    // Additional initialization logic
  }

  saveFormChanges() {
    // Implement logic to save the edited form
    // You should call your service to send the edited form data to the server
    this.formService.edit(this.formData.id, this.formData).subscribe((response) => {
      if (response) {
        // Successfully edited the form, close the dialog
        this.dialogRef.close(response);
      } else {
        // Handle error case, display an error message, etc.
      }
    });
  }
}
