package com.example.server.domain;

import lombok.*;

import jakarta.persistence.*;

@Entity
@Data
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long customerId;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;
}