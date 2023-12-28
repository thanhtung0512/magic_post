package com.example.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.server.domain.TransactionPointGatheringPoint;

public interface TransactionPointGatheringPointRepository extends JpaRepository<TransactionPointGatheringPoint, Long> {

}
