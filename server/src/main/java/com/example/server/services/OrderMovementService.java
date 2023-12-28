package com.example.server.services;

import com.example.server.domain.OrderMovement;
import com.example.server.repositories.OrderMovementRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderMovementService {

    @Autowired
    private OrderMovementRepository orderMovementRepository;

    public List<OrderMovement> getAllOrderMovements() {
        return orderMovementRepository.findAll();
    }

    public List<OrderMovement> ordersGoInSpecificTransactionPoint(Long transactionPointID) {
        List<OrderMovement> allOrderMovements = getAllOrderMovements();
        List<OrderMovement> ordersGoInSpecificTransactionPoint = new ArrayList<>();
        System.out.println("TransactionPointID: " + transactionPointID);
        for (OrderMovement orderMovement : allOrderMovements) {
            if (orderMovement.getTransactionPoint().getTransactionPointId() == transactionPointID

                    && orderMovement.getMovementType().equals("IN")) {
                // System.out.println(orderMovement.getGatheringPoint().toString());
                ordersGoInSpecificTransactionPoint.add(orderMovement);
            }
        }

        // for (OrderMovement orderMovement : allOrderMovements) {
        // System.out.println(orderMovement.toString());
        // System.out.println("TransactionPointID in orderMovement: "
        // + orderMovement.getTransactionPoint().getTransactionPointId());

        // }
        return ordersGoInSpecificTransactionPoint;
    }

    public List<OrderMovement> ordersGoOutTransactionPoint(Long transactionPointID) {
        List<OrderMovement> allOrderMovements = getAllOrderMovements();
        List<OrderMovement> ordersGoOutSpecificTransactionPoint = new ArrayList<>();
        for (OrderMovement orderMovement : allOrderMovements) {
            if (orderMovement.getTransactionPoint().getTransactionPointId() == transactionPointID
                    && orderMovement.getGatheringPoint() == null
                    && orderMovement.getMovementType() == "OUT") {
                ordersGoOutSpecificTransactionPoint.add(orderMovement);
            }
        }
        return ordersGoOutSpecificTransactionPoint;
    }

    public List<OrderMovement> ordersGoInGatheringPoint(Long gatheringPointID) {
        List<OrderMovement> orderMovements = getAllOrderMovements();
        List<OrderMovement> ordersGoInGatheringPoint = new ArrayList<>();
        for (OrderMovement orderMovement : orderMovements) {
            if (orderMovement.getGatheringPoint().getGatheringPointId() == gatheringPointID
                    && orderMovement.getTransactionPoint() == null
                    && orderMovement.getMovementType() == "IN") {
                ordersGoInGatheringPoint.add(orderMovement);
            }
        }
        return ordersGoInGatheringPoint;
    }

    public List<OrderMovement> ordersGoOutGatheringPoint(Long gatheringPointID) {
        List<OrderMovement> orderMovements = getAllOrderMovements();
        List<OrderMovement> ordersGoOutGatheringPoint = new ArrayList<>();
        for (OrderMovement orderMovement : orderMovements) {
            if (orderMovement.getGatheringPoint().getGatheringPointId() == gatheringPointID
                    && orderMovement.getTransactionPoint() == null
                    && orderMovement.getMovementType() == "OUT") {
                ordersGoOutGatheringPoint.add(orderMovement);
            }
        }
        return ordersGoOutGatheringPoint;
    }
    // Additional service methods if needed
}