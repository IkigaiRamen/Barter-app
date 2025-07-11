import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VenueService } from 'src/app/back/services/venue.service';

@Component({
  selector: 'app-add-venue',
  templateUrl: './add-venue.component.html',
  styleUrls: ['./add-venue.component.css']
})
export class AddVenueComponent {
  venueForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private venueService: VenueService, private router: Router) {
    this.venueForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      capacity: [0, Validators.min(0)],
      description: ['', Validators.required],
      website: [''],
      phone: [''],
      email: ['']
    });
  }

  submitForm() {
    if (this.venueForm.valid) {
      const formData = this.venueForm.value;
      this.venueService.createVenue(formData).subscribe(response => {
        // Handle the response or any further actions
        console.log('New venue created:', response);
        this.router.navigate(['/back/venues']); // Redirect to the desired route
      });
    }
  }
}
