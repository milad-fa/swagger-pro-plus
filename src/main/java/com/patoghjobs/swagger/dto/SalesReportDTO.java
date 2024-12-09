package com.patoghjobs.swagger.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;



@Data
public class SalesReportDTO {
    private LocalDate startDate;
    private LocalDate endDate;
    private BigDecimal totalRevenue;
    private BigDecimal averageOrderValue;
    private Integer totalOrders;
    private Integer totalUnitsSold;
    private List<DailySalesDTO> dailySales;
    private List<TopSellingProductDTO> topSellingProducts;
}