package com.patoghjobs.swagger.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;


@Data
public class OrderResponseDTO {
    private Long id;
    private String orderNumber;

    private CustomerInfoDTO customer;

    private BigDecimal subtotal;
    private BigDecimal tax;
    private BigDecimal total;
    private LocalDateTime createdAt;
}