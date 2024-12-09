package com.patoghjobs.swagger.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;


@Data
public class ProductStatusUpdateDTO {
    private String reason;
}