package com.example.server.controllers;

import com.example.server.domain.OrderMovement;
import com.example.server.services.OrderMovementService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/order-movements")
public class OrderMovementController {

    @Autowired
    private OrderMovementService orderMovementService;

    @GetMapping
    public List<OrderMovement> getAllOrderMovements() {
        return orderMovementService.getAllOrderMovements();
    }

    // Additional REST endpoints if needed
}
