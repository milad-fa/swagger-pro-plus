package com.patoghjobs.swagger.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;




@Data
public class ShipmentItemDTO {
    private Long productId;
    private String productName;
    private String sku;
    private Integer quantity;
    private String packageType;
    private Double weight;
}