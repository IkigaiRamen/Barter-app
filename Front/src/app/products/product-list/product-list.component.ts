// product-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  deleteProduct(productId: number): void {
    // Implement the delete logic here using this.productId
    console.log(`Deleting product with ID: ${productId}`);
    // Call your deleteProduct service method here

    // After deleting, reload the list of products or perform any other necessary actions
    // Example: this.loadProducts();
  }
}
