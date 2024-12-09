package com.patoghjobs.swagger.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;



@Data
public class OrderItemDTO {
    @NotNull(message = "Product ID is required")
    private Long productId;

    @NotNull(message = "Variant ID is required")
    private Long variantId;

    @Min(value = 1, message = "Quantity must be at least 1")
    private Integer quantity;
}