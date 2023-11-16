package com.example.server.domain;

import lombok.*;

import jakarta.persistence.*;

@Entity
@Data
@Table(name = "CompanyLeader")
public class CompanyLeader {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "LeaderID")
    private Long leaderId;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @Column(name = "Name", nullable = false)
    private String name;
}