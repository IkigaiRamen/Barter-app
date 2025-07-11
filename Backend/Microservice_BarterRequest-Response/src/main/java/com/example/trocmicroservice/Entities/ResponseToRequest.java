package com.example.trocmicroservice.Entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "responses")
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class ResponseToRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String message;

    private String status;
    @OneToOne
    private BarterRequest barterRequest;
}