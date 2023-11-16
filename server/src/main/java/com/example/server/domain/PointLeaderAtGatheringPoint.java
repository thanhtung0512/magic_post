package com.example.server.domain;

import lombok.*;

import jakarta.persistence.*;

@Entity
@Data
@Table(name = "PointLeaderAtGatheringPoint")
public class PointLeaderAtGatheringPoint {

    @Id
    @ManyToOne
    @JoinColumn(name = "leaderId")
    private CompanyLeader companyLeader;

    @Id
    @ManyToOne
    @JoinColumn(name = "gatheringPointId")
    private GatheringPoint gatheringPoint;
}