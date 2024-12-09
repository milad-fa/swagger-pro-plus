package com.patoghjobs.swagger.dto;

import lombok.Data;

import java.util.List;


@Data
public class BatchProductResponseDTO {
    private List<Long> createdProductIds;
    private int successCount;
    private int failureCount;
    private List<String> errors;
}