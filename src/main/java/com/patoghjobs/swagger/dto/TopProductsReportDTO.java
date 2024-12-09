package com.patoghjobs.swagger.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;



@Data
public class TopProductsReportDTO {
    private LocalDate startDate;
    private LocalDate endDate;
    private List<TopProductDetailDTO> products;
    private Map<String, BigDecimal> categoryDistribution;
    private BigDecimal totalRevenue;
    private Integer totalUnitsSold;
}