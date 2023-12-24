package com.example.server.domain;

import lombok.*;

import jakarta.persistence.*;

@Entity
@Data
@Table(name = "PointLeaderAtGatheringPoint")
public class PointLeaderAtGatheringPoint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "LeaderID")
    private int pointLeaderId;

    @Id
    @OneToOne
    @JoinColumn(name = "gatheringPointId")
    private GatheringPoint gatheringPoint;

    @OneToOne
    @JoinColumn(name="userId")
    private User user;


    @Column(name = "Name")
    private String name;

    @Column(name = "PhoneNumber")
    private String phoneNumber;
}