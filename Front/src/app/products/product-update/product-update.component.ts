import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productId!: number;
  product!: Product;
  updatedProduct: Product = new Product();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = +this.route.snapshot.params['id'];
    this.loadProduct(productId);
  }

  loadProduct(productId: number): void {
    this.productService.getProductById(productId).subscribe(
      (data: Product) => {
        this.product = data;
        // Initialize updatedProduct with the retrieved product data
        this.updatedProduct = { ...this.product };
      },
      (error: any) => {
        console.error('Error fetching product:', error);
      }
    );
  }

  updateProduct(): void {
    this.productService.updateProduct(this.productId, this.updatedProduct).subscribe(
      (data: any) => {
        this.router.navigate(['/products']); // Redirect to the products list after update
      },
      (error: any) => {
        console.error('Error updating product:', error);
      }
    );
  }
}
