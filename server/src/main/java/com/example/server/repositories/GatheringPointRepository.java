package com.example.server.repositories;

import com.example.server.domain.GatheringPoint;
import com.example.server.domain.TransactionPoint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface GatheringPointRepository extends JpaRepository<GatheringPoint, Long> {
    List<GatheringPoint> findAll();
}
