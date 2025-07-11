package com.example.trocmicroservice.Controllers;
import com.example.trocmicroservice.Entities.BarterRequest;
import com.example.trocmicroservice.Services.BarterRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200") // Replace with your Angular app's URL
@RestController
@RequestMapping("/barterRequest")
public class BarterRequestController {

    @Autowired
    private BarterRequestService barterRequestService;

    @GetMapping
    public Iterable<BarterRequest> getAll() {
        return barterRequestService.getAll();
    }

    @GetMapping("/{id}")
    public BarterRequest getById(@PathVariable Long id) {
        return barterRequestService.getById(id);
    }

    @PostMapping
    public BarterRequest create(@RequestBody BarterRequest barterRequest) {
        return barterRequestService.create(barterRequest);
    }

    @PutMapping("/{id}")
    public BarterRequest update(@PathVariable Long id, @RequestBody BarterRequest barterRequest) {
        return barterRequestService.update(id, barterRequest);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        barterRequestService.delete(id);
    }
}