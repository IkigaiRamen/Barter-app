package com.example.trocmicroservice.Services;

import com.example.trocmicroservice.Entities.Venue;
import com.example.trocmicroservice.Repositories.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VenueService {

    @Autowired
    private VenueRepository venueRepository;

    public Iterable<Venue> getAll() {
        return venueRepository.findAll();
    }

    public Venue getById(Long id) {
        return venueRepository.findById(id).orElse(null);
    }

    public Venue create(Venue venue) {
        // Add logic to handle file upload and other operations
        return venueRepository.save(venue);
    }

    public Venue update(Long id, Venue venue) {
        // Add validation and logic for updating
        return venueRepository.save(venue);
    }

    public void delete(Long id) {
        venueRepository.deleteById(id);
    }
}