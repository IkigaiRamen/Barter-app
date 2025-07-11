import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormService } from 'src/app/back/services/form.service';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  formData: any = {};

  constructor(
    private dialogRef: MatDialogRef<AddFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formService: FormService // Add this line

  ) {
    this.formData = { ...data?.formData };
  }

  ngOnInit() {
    // Additional initialization logic
  }

  addNewForm() {
    this.formService.add(this.formData).subscribe(
      (response) => {
        // Handle success
        console.log('Form added successfully:', response);
  
        // Optionally, you can close the dialog if needed
        this.dialogRef.close(response);
  
        // Add any logic to refresh the page or update the form list
      },
      (error) => {
        console.error('Error:', error);
        // Display an error message to the user
      }
    );
  }
  

}
