package com.example.productreviewsms.Repositories;

import com.example.productreviewsms.Entities.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
}
