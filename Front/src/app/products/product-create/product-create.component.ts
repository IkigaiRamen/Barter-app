import { Component } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  product: Product = new Product();

  constructor(private productService: ProductService, private router: Router) {}

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(
      () => {
        console.log('Product created successfully!');
        this.router.navigate(['/products']); // Redirect to the product list after creation
      },
      (error: any) => {
        console.error('Error creating product:', error);
        // Handle the error as needed, e.g., show a user-friendly message
      }
    );
  }
}
