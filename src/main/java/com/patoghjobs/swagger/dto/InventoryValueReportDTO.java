package com.patoghjobs.swagger.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;


@Data
public class InventoryValueReportDTO {
    private BigDecimal totalInventoryValue;
    private Integer totalProducts;
    private Integer totalVariants;
    private List<WarehouseValueDTO> warehouseValues;
    private List<CategoryValueDTO> categoryValues;
    private List<ProductValueDTO> highestValueProducts;
    private LocalDateTime reportGeneratedAt;
}