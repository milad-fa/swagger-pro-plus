package com.patoghjobs.swagger.controller;

import com.patoghjobs.swagger.dto.OrderCreateDTO;
import com.patoghjobs.swagger.dto.OrderResponseDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/orders")
@Tag(name = "Order Management", description = "Order processing and management")
public class OrderController {

    @PostMapping
    @Operation(summary = "Create new order")
    public ResponseEntity<OrderResponseDTO> createOrder(
            @RequestBody @Valid OrderCreateDTO orderDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }


}