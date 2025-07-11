package com.example.trocmicroservice.Entities;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "events")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private LocalDate date;
    private String location;
    private double ticketPrice;
    private String image;
    private EventStatus status;
    @ManyToOne
    @JoinColumn(name = "venue_id")
    private Venue venue;
}
