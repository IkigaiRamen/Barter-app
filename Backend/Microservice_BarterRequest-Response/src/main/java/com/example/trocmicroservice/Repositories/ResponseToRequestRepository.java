package com.example.trocmicroservice.Repositories;

import com.example.trocmicroservice.Entities.ResponseToRequest;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResponseToRequestRepository extends CrudRepository<ResponseToRequest, Long> {
}
