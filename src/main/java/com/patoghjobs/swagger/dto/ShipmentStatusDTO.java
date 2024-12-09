package com.patoghjobs.swagger.dto;

import com.patoghjobs.swagger.enumeration.ShipmentStatus;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;



@Data
public class ShipmentStatusDTO {
    private Long shipmentId;
    private ShipmentStatus status;
    private String trackingNumber;
    private String carrier;
    private LocalDateTime statusUpdatedAt;
    private String statusDetails;
}