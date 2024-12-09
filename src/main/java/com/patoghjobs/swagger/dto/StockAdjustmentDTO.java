package com.patoghjobs.swagger.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;




@Data
public class StockAdjustmentDTO {
    @NotNull(message = "Product ID is required")
    private Long productId;

    @NotNull(message = "Warehouse ID is required")
    private Long warehouseId;

    @NotNull(message = "Adjustment quantity is required")
    private Integer quantity;


    private String reason;
}