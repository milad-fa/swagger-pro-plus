package com.patoghjobs.swagger.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;


@Data
public class OrderCreateDTO {
    @NotNull(message = "Customer information is required")
    private CustomerInfoDTO customer;

    @NotEmpty(message = "Order items are required")
    private List<OrderItemDTO> items;

    private String couponCode;
    private String notes;
}