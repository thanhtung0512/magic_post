package com.example.server.services;

import com.example.server.domain.DeliveryOrder;
import com.example.server.domain.GatheringPoint;
import com.example.server.domain.OrderMovement;
import com.example.server.domain.StaffAtGatheringPoint;
import com.example.server.domain.Teller;
import com.example.server.domain.TransactionPoint;
import com.example.server.domain.TransactionPointGatheringPoint;
import com.example.server.domain.User;
import com.example.server.repositories.OrderMovementRepository;
import com.example.server.repositories.StaffRepository;
import com.example.server.repositories.TellerRepository;
import com.example.server.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderMovementService {

    @Autowired
    private OrderMovementRepository orderMovementRepository;

    @Autowired
    private TellerRepository tellerRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private StaffRepository staffRepository;

    public List<OrderMovement> getAllOrderMovements() {
        return orderMovementRepository.findAll();
    }

    public List<OrderMovement> ordersGoInSpecificTransactionPoint(Long userId) {
        List<OrderMovement> ordersGoInSpecificTransactionPoint = new ArrayList<>();
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            Optional<Teller> tellerOptional = tellerRepository.findByUser(user);
            Optional<StaffAtGatheringPoint> staffOptional = staffRepository.findByUser(user);

            if (tellerOptional.isPresent()) {
                // Transaction point
                TransactionPoint transactionPoint = tellerOptional.get().getTransactionPoint();
                Long currentTransactionPointId = transactionPoint.getTransactionPointId();
                List<OrderMovement> allOrderMovements = getAllOrderMovements();

                System.out.println("currentTransactionPointId: " + currentTransactionPointId);
                for (OrderMovement orderMovement : allOrderMovements) {
                    if (orderMovement.getTransactionPoint().getTransactionPointId() == currentTransactionPointId

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

            }
        }
        return ordersGoInSpecificTransactionPoint;
    }

    public List<OrderMovement> ordersGoOutTransactionPoint(Long userId) {
        List<OrderMovement> ordersGoOutSpecificTransactionPoint = new ArrayList<>();
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            Optional<Teller> tellerOptional = tellerRepository.findByUser(user);
            Optional<StaffAtGatheringPoint> staffOptional = staffRepository.findByUser(user);

            if (tellerOptional.isPresent()) {
                // Transaction point
                TransactionPoint transactionPoint = tellerOptional.get().getTransactionPoint();
                Long currentTransactionPointId = transactionPoint.getTransactionPointId();
                List<OrderMovement> allOrderMovements = getAllOrderMovements();

                for (OrderMovement orderMovement : allOrderMovements) {
                    if (orderMovement.getTransactionPoint().getTransactionPointId() == currentTransactionPointId
                            && orderMovement.getGatheringPoint() == null
                            && orderMovement.getMovementType() == "OUT") {
                        ordersGoOutSpecificTransactionPoint.add(orderMovement);
                    }
                }

            }
        }

        // Splitting

        return ordersGoOutSpecificTransactionPoint;
    }

    public List<OrderMovement> ordersGoInGatheringPoint(Long userId) {
        List<OrderMovement> ordersGoInGatheringPoint = new ArrayList<>();
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            Optional<Teller> tellerOptional = tellerRepository.findByUser(user);
            Optional<StaffAtGatheringPoint> staffOptional = staffRepository.findByUser(user);

            if (tellerOptional.isPresent()) {

            } else {
                // find gathering point correspond to the transaction point in the order data
                GatheringPoint currentGatheringPoint = staffOptional.get().getGatheringPoint();
                Long currentGatheringPointId = currentGatheringPoint.getGatheringPointId();
                List<OrderMovement> orderMovements = getAllOrderMovements();

                for (OrderMovement orderMovement : orderMovements) {
                    if (orderMovement.getGatheringPoint().getGatheringPointId() == currentGatheringPointId
                            && orderMovement.getTransactionPoint() == null
                            && orderMovement.getMovementType() == "IN") {
                        ordersGoInGatheringPoint.add(orderMovement);
                    } else if (orderMovement.getGatheringPoint() != null
                            && orderMovement.getDestGatheringPoint() != null
                            && orderMovement.getDestGatheringPoint().getGatheringPointId() == currentGatheringPointId
                            && orderMovement.getMovementType().equals("IN")) {
                        ordersGoInGatheringPoint.add(orderMovement);
                    }
                }

            }
        }

        return ordersGoInGatheringPoint;
    }

    public List<OrderMovement> ordersGoOutGatheringPoint(Long userId) {

        List<OrderMovement> ordersGoOutGatheringPoint = new ArrayList<>();
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            Optional<Teller> tellerOptional = tellerRepository.findByUser(user);
            Optional<StaffAtGatheringPoint> staffOptional = staffRepository.findByUser(user);

            if (tellerOptional.isPresent()) {

            } else {
                // find gathering point correspond to the transaction point in the order data
                GatheringPoint currentGatheringPoint = staffOptional.get().getGatheringPoint();
                Long currentGatheringPointId = currentGatheringPoint.getGatheringPointId();
                List<OrderMovement> orderMovements = getAllOrderMovements();

                for (OrderMovement orderMovement : orderMovements) {
                    if (orderMovement.getGatheringPoint().getGatheringPointId() == currentGatheringPointId
                            && orderMovement.getTransactionPoint() == null
                            && orderMovement.getMovementType() == "OUT") {
                        ordersGoOutGatheringPoint.add(orderMovement);
                    } else if (orderMovement.getGatheringPoint() != null
                            && orderMovement.getDestGatheringPoint() != null
                            && orderMovement.getGatheringPoint().getGatheringPointId() == currentGatheringPointId
                            && orderMovement.getMovementType().equals("IN")) {
                        ordersGoOutGatheringPoint.add(orderMovement);
                    }
                }

            }
        }

        return ordersGoOutGatheringPoint;

        // Splitting

    }
    // Additional service methods if needed
}