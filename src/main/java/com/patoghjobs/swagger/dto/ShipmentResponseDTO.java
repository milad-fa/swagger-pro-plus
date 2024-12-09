package com.patoghjobs.swagger.dto;

import com.patoghjobs.swagger.enumeration.ShipmentStatus;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;



@Data
public class ShipmentResponseDTO {
    private Long id;
    private String shipmentNumber;
    private Long orderId;
    private ShipmentStatus status;
    private String trackingNumber;
    private String carrier;
    private AddressDTO shippingAddress;
    private List<ShipmentItemDTO> items;
    private LocalDateTime createdAt;
    private LocalDateTime estimatedDeliveryDate;
    private LocalDateTime actualDeliveryDate;
}