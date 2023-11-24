package com.example.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.server.domain.DeliveryOrder;
import com.example.server.services.DeliveryOrderService;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/delivery-orders")
public class DeliveryOrderController {

    @Autowired
    private DeliveryOrderService deliveryOrderService;

    // Get all delivery orders
    @GetMapping
    public List<DeliveryOrder> getAllDeliveryOrders() throws JsonProcessingException {
        return deliveryOrderService.getAllDeliveryOrders();
    }

    // Get delivery order by ID
    @GetMapping("/{orderID}")
    public Optional<DeliveryOrder> getDeliveryOrderById(@PathVariable Long orderID) {
        return deliveryOrderService.getDeliveryOrderById(orderID);
    }
}
