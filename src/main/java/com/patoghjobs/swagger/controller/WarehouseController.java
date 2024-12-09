package com.patoghjobs.swagger.controller;

import com.patoghjobs.swagger.dto.WarehouseCreateDTO;
import com.patoghjobs.swagger.dto.WarehouseDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/warehouses")
@Tag(name = "Warehouse Management", description = "Warehouse and location management")
public class WarehouseController {

    @GetMapping
    @Operation(summary = "Get all warehouses")
    public ResponseEntity<List<WarehouseDTO>> getAllWarehouses() {
        return ResponseEntity.ok().build();
    }

    @PostMapping
    @Operation(summary = "Create new warehouse")
    public ResponseEntity<WarehouseDTO> createWarehouse(
            @RequestBody @Valid WarehouseCreateDTO warehouseDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }


}