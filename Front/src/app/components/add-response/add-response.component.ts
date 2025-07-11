import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseService } from 'src/app/back/services/response.service';

@Component({
  selector: 'app-add-response',
  templateUrl: './add-response.component.html',
  styleUrls: ['./add-response.component.css']
})
export class AddResponseComponent {
  responseForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private responseService: ResponseService, private router: Router) {
    this.responseForm = this.formBuilder.group({
      message: [''],
      status: [''],
    });
  }

  submitForm() {
    if (this.responseForm.valid) {
      const formData = this.responseForm.value;
      this.responseService.createResponse(formData).subscribe(response => {
        // Handle the response or any further actions
        console.log('New response created:', response);
        this.router.navigate(['/back/responses']); // Redirect to the desired route
      });
    }
  }
}
