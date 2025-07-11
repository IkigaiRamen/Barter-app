package com.example.trocmicroservice.Services;

import com.example.trocmicroservice.Entities.BarterRequest;
import com.example.trocmicroservice.Repositories.BarterRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BarterRequestService {

    @Autowired
    private BarterRequestRepository barterRequestRepository;

    public Iterable<BarterRequest> getAll() {
        return barterRequestRepository.findAll();
    }

    public BarterRequest getById(Long id) {
        return barterRequestRepository.findById(id).orElse(null);
    }

    public BarterRequest create(BarterRequest barterRequest) {
        // Add logic to handle file upload and other operations
        return barterRequestRepository.save(barterRequest);
    }

    public BarterRequest update(Long id, BarterRequest barterRequest) {
        // Add validation and logic for updating
        return barterRequestRepository.save(barterRequest);
    }

    public void delete(Long id) {
        barterRequestRepository.deleteById(id);
    }
}