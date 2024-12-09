package com.patoghjobs.swagger.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Map;


@Data
public class ProductVariantDTO {
    private Long id;
    private String sku;
    private BigDecimal price;
    private Map<String, String> attributes;
    private Integer stockLevel;
}
