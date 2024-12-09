package com.patoghjobs.swagger.controller;

import com.patoghjobs.swagger.dto.ShipmentCreateDTO;
import com.patoghjobs.swagger.dto.ShipmentResponseDTO;
import com.patoghjobs.swagger.dto.ShipmentStatusDTO;
import com.patoghjobs.swagger.dto.ShipmentStatusUpdateDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/shipments")
@Tag(name = "Shipment Management", description = "Shipping and delivery management")
public class ShipmentController {

    @PostMapping
    @Operation(summary = "Create new shipment")
    public ResponseEntity<ShipmentResponseDTO> createShipment(
            @RequestBody @Valid ShipmentCreateDTO shipmentDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }


    @PatchMapping("/{id}/status")
    @Operation(summary = "Update shipment status")
    public ResponseEntity<ShipmentStatusDTO> updateStatus(
            @PathVariable Long id,
            @RequestBody @Valid ShipmentStatusUpdateDTO statusDTO) {
        return ResponseEntity.ok().build();
    }
}