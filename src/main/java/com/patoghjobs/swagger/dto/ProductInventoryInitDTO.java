package com.patoghjobs.swagger.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;


@Data
@Builder
class ProductInventoryInitDTO {
    @NotNull(message = "Initial stock is required")
    @Min(value = 0, message = "Initial stock must not be negative")
    private Integer quantity;

    @NotNull(message = "Warehouse ID is required")
    private Long warehouseId;

    private String locationCode;
}