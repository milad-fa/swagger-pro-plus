package com.patoghjobs.swagger.dto;

import com.patoghjobs.swagger.enumeration.WarehouseZoneType;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;



@Data
public class WarehouseZoneDTO {
    private Long id;
    private String name;
    private String code;
    private WarehouseZoneType type;
    private Integer capacity;
    private Integer utilized;
    private Boolean isActive;
}