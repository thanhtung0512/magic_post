package com.example.server.domain;

import lombok.*;

import jakarta.persistence.*;

@Entity
@Table(name = "PointLeaderAtTransactionPoint")
@Data
@IdClass(PointLeaderAtTransactionPointId.class)
public class PointLeaderAtTransactionPoint extends PointLeader {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "LeaderID")
    private Long pointLeaderId;

    @Id
    @ManyToOne
    @JoinColumn(name = "transactionPointId")
    private TransactionPoint transactionPoint;

    @OneToOne
    @JoinColumn(name = "userId")
    private User user;

    @Column(name = "Name")
    private String name;

    @Column(name = "PhoneNumber")
    private String phoneNumber;
}