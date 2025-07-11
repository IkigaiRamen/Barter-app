import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../back/services/category.service'; // Import the CategoryService
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories?: any[];

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((data: any) => {
      this.categories = data;
      console.log(data);
    });
  }

  deleteCategory(categoryId: number) {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categoryService.deleteCategory(categoryId).subscribe(() => {
        // Refresh your data or update the UI as needed after a successful delete
        console.log('Category deleted');
        this.categoryService.getAllCategories().subscribe((data: any) => {
          this.categories = data;
          console.log(data);
        });
      });
    }
  }

  editCategory(categoryId: number) {
    this.router.navigate([`/back/editCategory/${categoryId}`]);
  }
}
