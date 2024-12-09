package com.patoghjobs.swagger.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.List;



@Data
public class InventoryDetailsDTO {
    private Long productId;
    private String productName;
    private List<WarehouseStockDTO> warehouseStock;
    private Integer totalStock;
    private Integer reservedStock;
    private Integer availableStock;
}