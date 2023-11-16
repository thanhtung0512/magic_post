package com.example.server.domain;

import lombok.*;

import jakarta.persistence.*;

@Entity
@Data
@Table(name = "Goods")
public class Goods {

    public Goods() {}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "GoodsID")
    private Long goodsId;

    @Column(name = "Description", nullable = false)
    private String description;
}