package com.example.server.controllers;

import com.example.server.domain.OrderMovement;
import com.example.server.services.OrderMovementService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
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

    @GetMapping("/transaction/in/{userId}")
    public ResponseEntity<List<OrderMovement>> ordersGoInSpecificTransactionPoint(
            @PathVariable("userId") Long userId) {

        List<OrderMovement> ordersGoInSpecificTransactionPoint = orderMovementService
                .ordersGoInSpecificTransactionPoint(userId);
        return ResponseEntity.ok(ordersGoInSpecificTransactionPoint);
    }

    @GetMapping("/transaction/out/{userId}")
    public ResponseEntity<List<OrderMovement>> ordersGoOutFromSpecificTransactionPoint(
            @PathVariable("userId") Long userId) {
        List<OrderMovement> ordersGoOutFromSpecificTransactionPoint = orderMovementService
                .ordersGoOutTransactionPoint(userId);
        return ResponseEntity.ok(ordersGoOutFromSpecificTransactionPoint);

    }

    @GetMapping("/gathering/in/{userId}")
    public ResponseEntity<List<OrderMovement>> ordersGoInSpecificGatheringPoint(
            @PathVariable("userId") Long userId) {
        List<OrderMovement> ordersGoInSpecificGatheringPoint = orderMovementService
                .ordersGoInGatheringPoint(userId);
        return ResponseEntity.ok(ordersGoInSpecificGatheringPoint);
    }

    @GetMapping("/gathering/out/{userId}")
    public ResponseEntity<List<OrderMovement>> ordersGoOutSpecificGatheringPoint(
            @PathVariable("userId") Long userId) {
        List<OrderMovement> ordersGoOutGatheringPoint = orderMovementService
                .ordersGoOutGatheringPoint(userId);
        return ResponseEntity.ok(ordersGoOutGatheringPoint);
    }
    // Additional REST endpoints if needed
}
