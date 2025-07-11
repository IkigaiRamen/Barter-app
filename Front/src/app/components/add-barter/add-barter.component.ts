import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BarterRequestService } from 'src/app/back/services/barter-request.service';

@Component({
  selector: 'app-add-barter',
  templateUrl: './add-barter.component.html',
  styleUrls: ['./add-barter.component.css']
})
export class AddBarterComponent {
  barterForm: FormGroup;
  editMode = false; // Flag to indicate edit mode
  selectedRequestId: number | null = null;
  constructor(private formBuilder: FormBuilder, private barterRequestService: BarterRequestService, private router: Router) {
    this.barterForm = this.formBuilder.group({
      title: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.barterForm.valid) {
      const formData = this.barterForm.value;
      this.barterRequestService.createBarterRequest(formData).subscribe(response => {
        // Handle the response or any further actions
        console.log('New barter request created:', response);
        this.router.navigate(['/back/barterRequests']); // Redirect to the desired route
      });
    }
  }

}
