package com.patoghjobs.swagger.dto;

import jakarta.validation.constraints.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;


@Data
public class BulkDiscountDTO {
    @NotEmpty(message = "Product IDs are required")
    private List<Long> productIds;

    @NotNull(message = "Discount percentage is required")
    @DecimalMin(value = "0.0")
    @DecimalMax(value = "100.0")
    private BigDecimal discountPercentage;

    @NotNull(message = "Start date is required")
    private LocalDateTime startDate;

    private LocalDateTime endDate;
}