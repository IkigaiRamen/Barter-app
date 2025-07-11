package com.example.trocmicroservice.Controllers;
import com.example.trocmicroservice.Entities.Venue;
import com.example.trocmicroservice.Services.VenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200") // Replace with your Angular app's URL

@RestController
@RequestMapping("/venue")
public class VenueController {

    @Autowired
    private VenueService venueService;

    @GetMapping
    public Iterable<Venue> getAll() {
        return venueService.getAll();
    }

    @GetMapping("/{id}")
    public Venue getById(@PathVariable Long id) {
        return venueService.getById(id);
    }

    @PostMapping
    public Venue create(@RequestBody Venue venue) {

        System.out.println(venue);
        return venueService.create(venue);
    }

    @PutMapping("/{id}")
    public Venue update(@PathVariable Long id, @RequestBody Venue venue) {
        return venueService.update(id, venue);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        venueService.delete(id);
    }
}