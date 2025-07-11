import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/back/services/category.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent {

  category: any = {};
  categoryId: any;

  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(this.categoryId).subscribe((data: any) => {
      this.category = data;
    });
  }

  updateCategory() {
    this.categoryService.updateCategory(this.categoryId, this.category).subscribe(() => {
      console.log('Category updated');
      this.router.navigate(['/back/categories']);
    });
  }
}
