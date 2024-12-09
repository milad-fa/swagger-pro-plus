package com.patoghjobs.swagger.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;



@Data
public class StockTransferDTO {
    @NotNull(message = "Source warehouse is required")
    private Long sourceWarehouseId;

    @NotNull(message = "Destination warehouse is required")
    private Long destinationWarehouseId;

    @NotEmpty(message = "Transfer items are required")
    private List<TransferItemDTO> items;

    private String notes;
}