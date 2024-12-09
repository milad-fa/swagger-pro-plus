package com.patoghjobs.swagger.dto;

import com.patoghjobs.swagger.enumeration.AdjustmentType;
import lombok.Data;

import java.time.LocalDateTime;



@Data
public class StockAdjustmentResponseDTO {
    private Long id;
    private Long productId;
    private Long warehouseId;
    private Integer quantity;
    private AdjustmentType type;
    private String reason;
    private String adjustedBy;
    private LocalDateTime adjustedAt;
    private Integer newStockLevel;
}