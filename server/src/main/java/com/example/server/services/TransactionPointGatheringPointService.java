package com.example.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.server.domain.TransactionPointGatheringPoint;
import com.example.server.repositories.TransactionPointGatheringPointRepository;

@Service
public class TransactionPointGatheringPointService {
    @Autowired
    private TransactionPointGatheringPointRepository transactionPointGatheringPointRepository;

    public List<TransactionPointGatheringPoint> allTransactionPointGatheringPointLinking() {
        return transactionPointGatheringPointRepository.findAll();
    }
}
