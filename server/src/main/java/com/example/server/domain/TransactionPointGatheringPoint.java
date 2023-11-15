package com.example.server.domain;

import lombok.*;

import jakarta.persistence.*;

@Entity
@Table(name = "TransactionPointGatheringPoint")
@Data
public class TransactionPointGatheringPoint {

    @Id
    @ManyToOne
    @JoinColumn(name = "transactionPointId")
    private TransactionPoint transactionPoint;

    @Id
    @ManyToOne
    @JoinColumn(name = "gatheringPointId")
    private GatheringPoint gatheringPoint;
}
