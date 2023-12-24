package com.example.server.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.server.domain.PointLeader;
import com.example.server.domain.PointLeaderAtGatheringPoint;
import com.example.server.domain.PointLeaderAtTransactionPoint;
import com.example.server.repositories.PointLeaderAtGatheringPointRepository;
import com.example.server.repositories.PointLeaderAtTransactionPointRepository;

@Service
public class PointLeaderService {
    @Autowired
    private PointLeaderAtGatheringPointRepository pointLeaderAtGatheringPointRepository;

    @Autowired
    private PointLeaderAtTransactionPointRepository pointLeaderAtTransactionPointRepository;

    public List<PointLeaderAtGatheringPoint> getAllPointLeaderGatheringPoint() {
        return pointLeaderAtGatheringPointRepository.findAll();
    }

    public List<PointLeaderAtTransactionPoint> getAllPointLeaderAtTransactionPoint() {
        return pointLeaderAtTransactionPointRepository.findAll();
    }

    public List<PointLeader> getAllPointLeader() {
        List<PointLeader> pointLeaders = new ArrayList<>();
        pointLeaders.addAll(getAllPointLeaderGatheringPoint());
        pointLeaders.addAll(getAllPointLeaderAtTransactionPoint());
        return pointLeaders;

    }
}
