package com.patoghjobs.swagger.dto;

import lombok.Data;




@Data
public class ProductStatusDTO {
    private Long productId;
    private String status;
    private String lastUpdated;
}