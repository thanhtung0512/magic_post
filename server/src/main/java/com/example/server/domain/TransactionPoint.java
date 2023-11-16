package com.example.server.domain;

import lombok.*;

import jakarta.persistence.*;

@Entity
@Data
@Entity
public class TransactionPoint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long transactionPointId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String address;

    // Getters and setters
}
