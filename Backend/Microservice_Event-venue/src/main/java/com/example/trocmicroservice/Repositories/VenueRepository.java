package com.example.trocmicroservice.Repositories;

import com.example.trocmicroservice.Entities.Venue;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface VenueRepository extends CrudRepository<Venue, Long> {
}
