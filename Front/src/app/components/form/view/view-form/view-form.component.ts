import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {
  formData: any = {};

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {
    this.formData = { ...data.formData };
  }

  ngOnInit() {
    // Additional initialization logic
  }
}
