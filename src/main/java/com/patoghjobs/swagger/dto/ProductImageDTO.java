package com.patoghjobs.swagger.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;


@Data
public class ProductImageDTO {
    private Long id;
    private String url;
    private String type;
    private Boolean isPrimary;
    private LocalDateTime uploadedAt;
}