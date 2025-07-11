import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnnonceService } from 'src/app/back/services/annonce.service';

@Component({
  selector: 'app-addannonce',
  templateUrl: './addannonce.component.html',
  styleUrls: ['./addannonce.component.css']
})
export class AddannonceComponent {
  annonceForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private annonceService: AnnonceService, private router: Router) {
    this.annonceForm = this.formBuilder.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      telephone: [0, Validators.min(0)],
      echange: [''],
    });
  }

  submitForm() {
    if (this.annonceForm.valid) {
      const formData = this.annonceForm.value;
      this.annonceService.createAnnonce(formData).subscribe(response => {
        // Handle the response or any further actions
        console.log('New annonce created:', response);
        this.router.navigate(['/back/annonces']); // Redirect to the desired route
      });
    }
  }
}
