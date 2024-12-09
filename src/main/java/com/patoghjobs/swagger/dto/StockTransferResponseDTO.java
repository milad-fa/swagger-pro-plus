package com.patoghjobs.swagger.dto;

import com.patoghjobs.swagger.enumeration.TransferStatus;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;



@Data
public class StockTransferResponseDTO {
    private Long id;
    private String transferNumber;
    private Long sourceWarehouseId;
    private Long destinationWarehouseId;
    private TransferStatus status;
    private String notes;
    private String createdBy;
    private LocalDateTime createdAt;
    private LocalDateTime completedAt;
}