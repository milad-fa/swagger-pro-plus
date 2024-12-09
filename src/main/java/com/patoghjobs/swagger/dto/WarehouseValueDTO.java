package com.patoghjobs.swagger.dto;

import lombok.Data;

import java.math.BigDecimal;



@Data
public class WarehouseValueDTO {
    private Long warehouseId;
    private String warehouseName;
    private BigDecimal totalValue;
    private Integer productCount;
    private Double capacityUtilization;
}