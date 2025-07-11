import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/back/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  categoryForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService, private router: Router) {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.categoryForm.valid) {
      const formData = this.categoryForm.value;
      this.categoryService.createCategory(formData).subscribe(response => {
        // Handle the response or any further actions
        console.log('New category created:', response);
        this.router.navigate(['/back/categories']); // Redirect to the desired route
      });
    }
  }
}
