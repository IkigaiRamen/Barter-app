package com.example.trocmicroservice.Repositories;

import com.example.trocmicroservice.Entities.Event;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends CrudRepository<Event, Long> {
}
