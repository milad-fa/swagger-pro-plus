package com.patoghjobs.swagger.dto;

import lombok.Data;

import java.math.BigDecimal;



@Data
public class CreateProductDTO {
    private String name;
    private String sku;
    private BigDecimal price;
    private int initialStock;
    private Long warehouseId;
}