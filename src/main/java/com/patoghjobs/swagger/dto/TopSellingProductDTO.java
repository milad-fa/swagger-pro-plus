package com.patoghjobs.swagger.dto;

import lombok.Data;

import java.math.BigDecimal;



@Data
public class TopSellingProductDTO {
    private Long productId;
    private String productName;
    private Integer unitsSold;
    private BigDecimal revenue;
    private Double percentageOfTotalRevenue;
}