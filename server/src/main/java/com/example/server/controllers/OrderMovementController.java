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

    @GetMapping("/transaction/in/{transactionPointID}")
    public ResponseEntity<List<OrderMovement>> ordersGoInSpecificTransactionPoint(
            @PathVariable("transactionPointID") Long transactionPointID) {

        List<OrderMovement> ordersGoInSpecificTransactionPoint = orderMovementService
                .ordersGoInSpecificTransactionPoint(transactionPointID);
        return ResponseEntity.ok(ordersGoInSpecificTransactionPoint);
    }

    @GetMapping("/transaction/out/{transactionPointID}")
    public ResponseEntity<List<OrderMovement>> ordersGoOutFromSpecificTransactionPoint(
            @PathVariable("transactionPointID") Long transactionPointID) {
        List<OrderMovement> ordersGoOutFromSpecificTransactionPoint = orderMovementService
                .ordersGoOutTransactionPoint(transactionPointID);
        return ResponseEntity.ok(ordersGoOutFromSpecificTransactionPoint);

    }

    @GetMapping("/gathering/in/{gatheringPointID}")
    public ResponseEntity<List<OrderMovement>> ordersGoInSpecificGatheringPoint(
            @PathVariable("gatheringPointID") Long gatheringPointID) {
        List<OrderMovement> ordersGoInSpecificGatheringPoint = orderMovementService
                .ordersGoInGatheringPoint(gatheringPointID);
        return ResponseEntity.ok(ordersGoInSpecificGatheringPoint);
    }

    @GetMapping("/gathering/out/{gatheringPointID}")
    public ResponseEntity<List<OrderMovement>> ordersGoOutSpecificGatheringPoint(
            @PathVariable("gatheringPointID") Long gatheringPointID) {
        List<OrderMovement> ordersGoOutGatheringPoint = orderMovementService
                .ordersGoOutGatheringPoint(gatheringPointID);
        return ResponseEntity.ok(ordersGoOutGatheringPoint);
    }
    // Additional REST endpoints if needed
}
