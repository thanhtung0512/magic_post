package com.example.server.domain;

import lombok.*;

import jakarta.persistence.*;

@Entity
@Data
public class CompanyLeader {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long leaderId;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @Column(nullable = false)
    private String name;
}