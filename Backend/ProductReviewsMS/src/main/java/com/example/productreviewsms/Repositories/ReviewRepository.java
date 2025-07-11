package com.example.productreviewsms.Repositories;

import com.example.productreviewsms.Entities.Review;
import org.springframework.data.repository.CrudRepository;

public interface ReviewRepository extends CrudRepository<Review, Long> {
}