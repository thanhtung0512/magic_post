package com.example.server.domain;

import lombok.*;

import jakarta.persistence.*;

@Entity
@Data
public class GatheringPoint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long gatheringPointId;

    @Column(nullable = false)
    private String name;
}