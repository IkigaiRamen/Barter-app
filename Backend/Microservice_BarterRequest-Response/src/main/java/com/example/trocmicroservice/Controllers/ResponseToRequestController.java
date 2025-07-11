package com.example.trocmicroservice.Controllers;
import com.example.trocmicroservice.Entities.ResponseToRequest;
import com.example.trocmicroservice.Services.ResponseToRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200") // Replace with your Angular app's URL
@RestController
@RequestMapping("/response")
public class ResponseToRequestController {

    @Autowired
    private ResponseToRequestService responseToRequestService;

    @GetMapping
    public Iterable<ResponseToRequest> getAll() {
        return responseToRequestService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseToRequest getById(@PathVariable Long id) {
        return responseToRequestService.getById(id);
    }

    @PostMapping
    public ResponseToRequest create(@RequestBody ResponseToRequest responseToRequest) {
        return responseToRequestService.create(responseToRequest);
    }

    @PutMapping("/{id}")
    public ResponseToRequest update(@PathVariable Long id, @RequestBody ResponseToRequest responseToRequest) {
        return responseToRequestService.update(id, responseToRequest);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        responseToRequestService.delete(id);
    }
}