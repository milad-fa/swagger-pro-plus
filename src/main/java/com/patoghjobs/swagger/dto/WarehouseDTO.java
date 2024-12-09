package com.patoghjobs.swagger.dto;

import com.patoghjobs.swagger.enumeration.WarehouseType;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;



@Data
public class WarehouseDTO {
    private Long id;
    private String name;
    private String code;
    private AddressDTO address;
    private WarehouseType type;
    private Boolean isActive;
    private Integer totalCapacity;
    private Integer usedCapacity;
    private List<WarehouseZoneDTO> zones;
    private LocalDateTime createdAt;
}