package com.example.server.controllers;

import com.example.server.domain.TransactionPoint;
import com.example.server.repositories.TransactionPointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/transaction-points")
public class TransactionPointController {

    private final TransactionPointRepository transactionPointRepository;

    @Autowired
    public TransactionPointController(TransactionPointRepository transactionPointRepository) {
        this.transactionPointRepository = transactionPointRepository;
    }

    @GetMapping
    public List<TransactionPoint> getAllTransactionPoints() {
        return transactionPointRepository.findAll();
    }
}
