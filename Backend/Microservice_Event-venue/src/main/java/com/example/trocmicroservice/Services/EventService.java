package com.example.trocmicroservice.Services;

import com.example.trocmicroservice.Entities.Event;
import com.example.trocmicroservice.Repositories.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public Iterable<Event> getAll() {
System.out.println(eventRepository.findAll());
return eventRepository.findAll();
    }

    public Event getById(Long id) {
        return eventRepository.findById(id).orElse(null);
    }

    public Event create(Event event) {
        // Add logic to handle file upload and other operations
        return eventRepository.save(event);
    }

    public Event update(Long id, Event event) {
        // Add validation and logic for updating
        return eventRepository.save(event);
    }

    public void delete(Long id) {
        eventRepository.deleteById(id);
    }
}