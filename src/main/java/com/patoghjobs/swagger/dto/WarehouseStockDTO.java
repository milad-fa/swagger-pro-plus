package com.patoghjobs.swagger.dto;

import lombok.Data;




@Data
public class WarehouseStockDTO {
    private Long warehouseId;
    private String warehouseName;
    private String locationCode;
    private Integer quantity;
}