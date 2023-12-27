package com.example.server.services;

import com.example.server.domain.OrderMovement;
import com.example.server.repositories.OrderMovementRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderMovementService {

    @Autowired
    private OrderMovementRepository orderMovementRepository;

    public List<OrderMovement> getAllOrderMovements() {
        return orderMovementRepository.findAll();
    }

    // Additional service methods if needed
}