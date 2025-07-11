import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/back/services/form.service';
import { MatDialog } from '@angular/material/dialog';
import { AddFormComponent } from '../add/add-form/add-form.component';
import { EditFormComponent } from '../edit/edit-form/edit-form.component';
import { ViewFormComponent } from '../view/view-form/view-form.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  forms: any[] = [];
  formDetails: any = {}; // Property to hold the details of a single form
  isNewForm: boolean = false; // Flag to indicate whether it's a new form or an edit operation

  constructor(private formService: FormService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadForms();
  }

  loadForms() {
    this.formService.getAll().subscribe((data) => {
      this.forms = data;
    });
  }

  openCreateFormDialog() {
    // Open a dialog for creating a new form
    const dialogRef = this.dialog.open(AddFormComponent, {
      width: '400px', // Set the width of the dialog
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      // Handle the result from the dialog if needed
      if (result) {
        // Perform any necessary actions after creating a form
        this.loadForms(); // Refresh the list of forms
      }
    });
  }
  
  openEditFormDialog(formId: number) {
    // Fetch the form data by formId
    this.formService.getById(formId).subscribe((formData) => {
      // Check if formData is not null or undefined
      if (formData) {
        // Open a dialog for editing an existing form and pass the formData
        const dialogRef = this.dialog.open(EditFormComponent, {
          width: '400px',
          data: { formData }, // Pass the fetched form data to the edit dialog
        });
  
        dialogRef.afterClosed().subscribe((result) => {
          // Handle the result from the dialog if needed
          if (result) {
            // Perform any necessary actions after editing a form
            this.loadForms(); // Refresh the list of forms
          }
        });
      } else {
        // Handle the case where the form data couldn't be fetched
        console.error('Failed to fetch form data for formId: ' + formId);
      }
    });
  }
  
  
  openViewFormDialog(formId: number) {
    // Open a dialog for viewing a form
    const dialogRef = this.dialog.open(ViewFormComponent, {
      width: '400px',
      data: { formId }, // Pass any data to the view dialog
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      // Handle the result from the dialog if needed
      if (result) {
        // Perform any necessary actions after viewing a form
      }
    });
  }
  deleteForm(formId: number) {
    // Call the delete method from FormService
    this.formService.delete(formId).subscribe(() => {
      // After successful deletion, reload the list of forms
      this.loadForms();
    });
  }
  
}
