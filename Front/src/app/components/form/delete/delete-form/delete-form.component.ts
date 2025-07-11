import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.css']
})
export class DeleteFormComponent  {
  constructor(
    private dialogRef: MatDialogRef<DeleteFormComponent >,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  confirmDelete() {
    // Implement logic to confirm the delete operation
    // You can send a signal back to the parent component to initiate the delete operation
    this.dialogRef.close(true);
  }

  cancelDelete() {
    // Implement logic to cancel the delete operation
    this.dialogRef.close(false);
  }
}
