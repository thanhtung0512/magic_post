package com.example.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.server.domain.TransactionPoint;
import com.example.server.repositories.TransactionPointRepository;

@Service
public class TransactionPointService {

    @Autowired
    private TransactionPointRepository transactionPointRepository;

    public List<TransactionPoint> getAllTransactionPoints() {
        return transactionPointRepository.findAll();
    }
}