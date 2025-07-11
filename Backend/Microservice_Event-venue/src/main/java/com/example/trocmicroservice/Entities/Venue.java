package com.example.trocmicroservice.Entities;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "venues")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Venue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String address;
    private int capacity;
    private String description;
    private String website;
    private String phone;
    private String email;
    private String image;
}