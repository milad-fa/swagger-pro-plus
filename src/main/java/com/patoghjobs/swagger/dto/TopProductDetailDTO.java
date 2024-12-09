package com.patoghjobs.swagger.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;


@Data
public class TopProductDetailDTO {
    private Long productId;
    private String productName;
    private String sku;
    private Integer unitsSold;
    private BigDecimal revenue;
    private List<String> topCategories;
    private Double growthRate;
}