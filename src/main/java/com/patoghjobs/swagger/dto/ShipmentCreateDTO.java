package com.patoghjobs.swagger.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;



@Data
public class ShipmentCreateDTO {
    @NotNull(message = "Order ID is required")
    private Long orderId;

    @NotNull(message = "Carrier is required")
    private String carrier;

    @Valid
    private AddressDTO shippingAddress;

    private List<Long> orderItemIds;
    private LocalDateTime scheduledDate;
    private String specialInstructions;
}