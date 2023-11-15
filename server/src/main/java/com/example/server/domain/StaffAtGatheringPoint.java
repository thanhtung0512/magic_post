package com.example.server.domain;

import lombok.*;

import jakarta.persistence.*;

@Entity
@Data
public class StaffAtGatheringPoint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long staffId;

    @ManyToOne
    @JoinColumn(name = "gatheringPointId")
    private GatheringPoint gatheringPoint;
}