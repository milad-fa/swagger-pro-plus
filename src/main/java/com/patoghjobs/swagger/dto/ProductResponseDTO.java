package com.patoghjobs.swagger.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;


@Data
public class ProductResponseDTO {
    private Long id;
    private String name;
    private BigDecimal price;
    private List<String> categories;
    private List<String> tags;
    private String description;
    private Boolean isPublished;
    private List<ProductVariantDTO> variants;
    private List<ProductImageDTO> images;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}