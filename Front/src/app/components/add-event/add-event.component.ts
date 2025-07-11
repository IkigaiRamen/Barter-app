import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/back/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  eventForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private eventService: EventService, private router: Router) {
    this.eventForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      ticketPrice: [0, Validators.min(0)]
    });
  }

  submitForm() {
    if (this.eventForm.valid) {
      const formData = this.eventForm.value;
      this.eventService.createEvent(formData).subscribe(response => {
        // Handle the response or any further actions
        console.log('New event created:', response);
        this.router.navigate(['/back/events']); // Redirect to the desired route
      });
    }
  }
}
