package com.patoghjobs.swagger.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;




@Data
public class ProductStockDTO {
    private Long productId;
    private int quantity;
    private Long warehouseId;
    private String status;
}