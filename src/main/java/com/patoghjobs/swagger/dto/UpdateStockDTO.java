package com.patoghjobs.swagger.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;


@Data
public class UpdateStockDTO {
    private int quantity;
    private String reason;
}