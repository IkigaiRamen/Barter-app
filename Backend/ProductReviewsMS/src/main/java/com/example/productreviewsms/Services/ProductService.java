package com.example.productreviewsms.Services;


import com.example.productreviewsms.Entities.Product;
import com.example.productreviewsms.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product createProduct(Product product) {
        // Add logic to handle file upload and other operations
        return productRepository.save(product);
    }

    public Product updateProduct(Long id, Product product) {
        // Add validation and logic for updating
        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}