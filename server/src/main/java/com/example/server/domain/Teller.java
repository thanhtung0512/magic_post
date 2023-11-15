package com.example.server.domain;

import lombok.*;

import jakarta.persistence.*;

@Entity
@Data
public class Teller {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tellerId;

    @ManyToOne
    @JoinColumn(name = "transactionPointId")
    private TransactionPoint transactionPoint;
}