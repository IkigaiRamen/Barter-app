package com.example.trocmicroservice.Services;

import com.example.trocmicroservice.Entities.ResponseToRequest;
import com.example.trocmicroservice.Repositories.ResponseToRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResponseToRequestService {

    @Autowired
    private ResponseToRequestRepository responseToRequestRepository;

    public Iterable<ResponseToRequest> getAll() {
        return responseToRequestRepository.findAll();
    }

    public ResponseToRequest getById(Long id) {
        return responseToRequestRepository.findById(id).orElse(null);
    }

    public ResponseToRequest create(ResponseToRequest responseToRequest) {
        // Add logic to handle file upload and other operations
        return responseToRequestRepository.save(responseToRequest);
    }

    public ResponseToRequest update(Long id, ResponseToRequest responseToRequest) {
        // Add validation and logic for updating
        return responseToRequestRepository.save(responseToRequest);
    }

    public void delete(Long id) {
        responseToRequestRepository.deleteById(id);
    }
}