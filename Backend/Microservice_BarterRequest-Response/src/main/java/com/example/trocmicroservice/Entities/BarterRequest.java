package com.example.trocmicroservice.Entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "barterRequests")
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class BarterRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String message;
    private String title;

}
