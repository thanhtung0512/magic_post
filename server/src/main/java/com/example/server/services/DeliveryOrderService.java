package com.example.server.services;

import org.apache.http.client.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.server.domain.DeliveryOrder;
import com.example.server.domain.GatheringPoint;
import com.example.server.domain.Teller;
import com.example.server.domain.TransactionPoint;
import com.example.server.domain.TransactionPointGatheringPoint;
import com.example.server.domain.User;
import com.example.server.dto.request.TellerCreateOrder;
import com.example.server.exceptions.OrderNotFoundException;
import com.example.server.repositories.DeliveryOrderRepository;
import com.example.server.repositories.TellerRepository;
import com.example.server.repositories.UserRepository;
import com.example.server.utilities.CacheUtility;
import com.fasterxml.jackson.core.JsonProcessingException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.sql.Date;
import java.sql.Time;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Service
public class DeliveryOrderService {

    public static final Long NULL_GOOD = new Long(6);

    @Autowired
    private TransactionPointGatheringPointService transactionPointGatheringPointService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TellerRepository tellerRepository;

    @Autowired
    private DeliveryOrderRepository deliveryOrderRepository;

    @Autowired
    private CacheUtility cacheUtility;

    public List<DeliveryOrder> getAllDeliveryOrders() throws JsonProcessingException {
        return cacheUtility.getAllDeliveryOrders();
    }

    public List<DeliveryOrder> findByStatus(String status) {
        return deliveryOrderRepository.findByStatus(status);
    }

    public Optional<DeliveryOrder> getDeliveryOrderById(Long orderID) {
        try {
            return cacheUtility.getDeliveryOrderById(orderID);
        } catch (Exception e) {
            System.out.println("Order not found with ID: " + orderID);
        }
        return null;

    }

    public void saveDeliveryOrder(DeliveryOrder deliveryOrder) {
        deliveryOrderRepository.save(deliveryOrder);
    }

    public void createOrder(TellerCreateOrder tellerCreateOrder) {

        String orderStatus = "Need_forward";

        String senderName = tellerCreateOrder.getSenderName();
        String senderAddress = tellerCreateOrder.getSenderAddress();
        String senderPhoneNumber = tellerCreateOrder.getSenderPhoneNumber();
        String senderPostalCode = tellerCreateOrder.getSenderPostalCode();

        String recipientName = tellerCreateOrder.getRecipientName();
        String recipientAddress = tellerCreateOrder.getRecipientAddress();
        String recipientPhoneNumber = tellerCreateOrder.getRecipientPhoneNumber();
        String recipientPostalCode = tellerCreateOrder.getRecipientPostalCode();

        String orderType = tellerCreateOrder.getOrderType();
        double mainFare = tellerCreateOrder.getMainFare();
        double extraFare = tellerCreateOrder.getExtraFare();
        double netWeight = tellerCreateOrder.getNetWeight();
        double conversionWeight = tellerCreateOrder.getConversionWeight();
        System.out.println("senderName: " + senderName + "\n" +
                "senderAddress: " + senderAddress + "\n" +
                "senderPhoneNumber: " + senderPhoneNumber + "\n" +
                "senderPostalCode: " + senderPostalCode + "\n" +
                "recipientName: " + recipientName + "\n" +
                "recipientAddress: " + recipientAddress + "\n" +
                "recipientPhoneNumber: " + recipientPhoneNumber + "\n" +
                "recipientPostalCode: " + recipientPostalCode + "\n" +
                "orderType: " + orderType + "\n" +
                "mainFare: " + mainFare + "\n" +
                "extraFare: " + extraFare + "\n" +
                "netWeight: " + netWeight + "\n" +
                "conversionWeight: " + conversionWeight);
        // step 1. get corresponding transaction point with current teller
        // how: get userid -> find teller base on user id -> getTransactionPoint
        Long userId = tellerCreateOrder.getUserId();
        Optional<User> currentUserOptional = userRepository.findById(userId);
        if (currentUserOptional.isPresent()) {
            User currentUser = currentUserOptional.get();

            System.out.println(currentUser.toString());

            Optional<Teller> currentTellerOptional = tellerRepository.findByUser(currentUser);
            if (currentTellerOptional.isPresent()) {
                Teller currentTeller = currentTellerOptional.get();
                // got teller -> get transaction point this teller belong to
                TransactionPoint tellerTransactionPoint = currentTeller.getTransactionPoint();
                System.out.println("Transaction point: " + tellerTransactionPoint.toString());
                // now, find the correspond gathering point to the found transaction point
                Optional<TransactionPointGatheringPoint> transactionPointGatheringPointOptional = transactionPointGatheringPointService
                        .findByTransactionPoint(tellerTransactionPoint);
                if (transactionPointGatheringPointOptional.isPresent()) {
                    // has the corresponding gathering point to the teller transaction point
                    TransactionPointGatheringPoint transactionPointGatheringPoint = transactionPointGatheringPointOptional
                            .get();
                    GatheringPoint tellerGatheringPoint = transactionPointGatheringPoint.getGatheringPoint();
                    System.out.println("Gathering point corresponding: " + tellerGatheringPoint.toString());

                    DeliveryOrder deliveryOrder = new DeliveryOrder();
                    java.util.Date currentDate = new java.util.Date();

                    // Convert to java.sql.Date
                    Date sqlDate = new Date(currentDate.getTime());

                    deliveryOrder.setDate(sqlDate);
                    deliveryOrder.setSenderTransactionPoint(tellerTransactionPoint);
                    deliveryOrder.setSenderGatheringPoint(tellerGatheringPoint);
                    deliveryOrder.setStatus(orderStatus);
                    deliveryOrder.setSenderAddress(senderAddress);
                    deliveryOrder.setRecipientAddress(recipientAddress);
                    // deliveryOrder.setPrice(price);
                    // deliveryOrder.setFare(0);
                    deliveryOrder.setSenderName(senderName);
                    deliveryOrder.setRecipientName(recipientName);
                    deliveryOrder.setFare((int) mainFare);
                    deliveryOrder.setPlusFare((int) extraFare);
                    deliveryOrder.setWeight((int) netWeight);
                    deliveryOrderRepository.save(deliveryOrder);
                }
            }

        }
    }
}
