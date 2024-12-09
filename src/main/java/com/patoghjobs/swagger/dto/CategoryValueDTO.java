package com.patoghjobs.swagger.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;



@Data
public class CategoryValueDTO {
    private String category;
    private BigDecimal totalValue;
    private Integer productCount;
    private Double percentageOfTotal;
}