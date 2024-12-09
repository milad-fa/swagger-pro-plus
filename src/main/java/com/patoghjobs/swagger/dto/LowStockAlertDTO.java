package com.patoghjobs.swagger.dto;

import lombok.Data;

import java.time.LocalDateTime;



@Data
public class LowStockAlertDTO {
    private Long id;
    private String transferNumber;
    private Long sourceWarehouseId;
    private Long destinationWarehouseId;

    private String notes;
    private String createdBy;
    private LocalDateTime createdAt;
    private LocalDateTime completedAt;
}