package com.patoghjobs.swagger.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;


@Data
public class DailySalesDTO {
    private String category;
    private BigDecimal revenue;
    private Integer unitsSold;
    private Double percentageOfTotal;
}