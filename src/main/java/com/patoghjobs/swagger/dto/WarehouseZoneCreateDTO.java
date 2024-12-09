package com.patoghjobs.swagger.dto;

import com.patoghjobs.swagger.enumeration.WarehouseZoneType;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;




@Data
public class WarehouseZoneCreateDTO {
    @NotBlank(message = "Zone name is required")
    private String name;

    @NotBlank(message = "Zone code is required")
    private String code;

    @NotNull(message = "Zone type is required")
    private WarehouseZoneType type;

    @NotNull(message = "Zone capacity is required")
    @Min(value = 1, message = "Capacity must be greater than 0")
    private Integer capacity;
}