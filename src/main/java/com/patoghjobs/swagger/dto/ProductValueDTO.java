package com.patoghjobs.swagger.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;


@Data
public class ProductValueDTO {
    private Long productId;
    private String productName;
    private Integer stockQuantity;
    private BigDecimal unitValue;
    private BigDecimal totalValue;
}