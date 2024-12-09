package com.patoghjobs.swagger.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;


@Data
public class StockValueReportDTO {
    private BigDecimal totalValue;
    private int totalProducts;
    private Map<String, BigDecimal> valueByCategory;
    private LocalDateTime generatedAt;
}