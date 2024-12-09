package com.patoghjobs.swagger.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
@Builder
public class ProductCreateDTO {
    @NotBlank(message = "Name is required")
    private String name;

    @NotNull(message = "Price is required")
    @DecimalMin(value = "0.01", message = "Price must be greater than 0")
    private BigDecimal price;

    @NotEmpty(message = "At least one category is required")
    private List<String> categories;

    private List<String> tags;

    @Size(max = 2000, message = "Description must not exceed 2000 characters")
    private String description;


    private List<ProductVariantCreateDTO> variants;

    @Valid
    private ProductInventoryInitDTO initialInventory;

    private Boolean isPublished;
}