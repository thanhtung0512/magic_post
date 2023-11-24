package com.example.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.server.domain.DeliveryOrder;
import com.example.server.exceptions.OrderNotFoundException;
import com.example.server.repositories.DeliveryOrderRepository;

import java.util.List;
import java.util.Optional;

@Service
public class DeliveryOrderService {

    @Autowired
    private DeliveryOrderRepository deliveryOrderRepository;

    public List<DeliveryOrder> getAllDeliveryOrders() {
        return deliveryOrderRepository.findAll();
    }

    public Optional<DeliveryOrder> getDeliveryOrderById(Long orderID) {
        try {
            return deliveryOrderRepository.findById(orderID);

        } catch (Exception e) {
            System.out.println("Order not found with ID: " + orderID);
        }
        return null;

    }
}
