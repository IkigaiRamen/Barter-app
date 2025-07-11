package com.example.trocmicroservice.Repositories;

import com.example.trocmicroservice.Entities.BarterRequest;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BarterRequestRepository extends CrudRepository<BarterRequest, Long> {
}
