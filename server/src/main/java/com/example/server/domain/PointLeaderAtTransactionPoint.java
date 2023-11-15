package com.example.server.domain;

import lombok.*;

import jakarta.persistence.*;

@Entity
@Table(name = "PointLeaderAtTransactionPoint")
@Data
public class PointLeaderAtTransactionPoint {

    @Id
    @ManyToOne
    @JoinColumn(name = "leaderId")
    private CompanyLeader companyLeader;

    @Id
    @ManyToOne
    @JoinColumn(name = "transactionPointId")
    private TransactionPoint transactionPoint;
}