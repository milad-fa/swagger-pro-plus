package com.patoghjobs.swagger.dto;

import com.patoghjobs.swagger.enumeration.WarehouseType;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;



@Data
public class WarehouseCreateDTO {
    @NotBlank(message = "Warehouse name is required")
    private String name;

    @NotBlank(message = "Warehouse code is required")
    private String code;

    @Valid
    @NotNull(message = "Address is required")
    private AddressDTO address;

    @NotNull(message = "Warehouse type is required")
    private WarehouseType type;

    @NotNull(message = "Total capacity is required")
    @Min(value = 1, message = "Capacity must be greater than 0")
    private Integer totalCapacity;

    private List<WarehouseZoneCreateDTO> zones;
}
