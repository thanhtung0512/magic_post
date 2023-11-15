package com.example.server.domain;

import lombok.*;

import jakarta.persistence.*;

@Entity
@Data
public class Goods {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long goodsId;

    @Column(nullable = false)
    private String description;
}