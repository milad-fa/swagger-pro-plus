package com.patoghjobs.swagger.dto;

import com.patoghjobs.swagger.enumeration.ShipmentStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;



@Data
public class ShipmentStatusUpdateDTO {
    @NotNull(message = "Status is required")
    private ShipmentStatus status;

    private String notes;
    private String location;
    private LocalDateTime estimatedDeliveryDate;
}