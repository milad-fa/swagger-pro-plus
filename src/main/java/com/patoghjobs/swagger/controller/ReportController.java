package com.patoghjobs.swagger.controller;

import com.patoghjobs.swagger.dto.InventoryValueReportDTO;
import com.patoghjobs.swagger.dto.SalesReportDTO;
import com.patoghjobs.swagger.dto.TopProductsReportDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;


@RestController
@RequestMapping("/api/v1/reports")
@Tag(name = "Report Management", description = "Business reports and analytics")
public class ReportController {

    @GetMapping("/sales")
    @Operation(summary = "Get sales report")
    public ResponseEntity<SalesReportDTO> getSalesReport(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate,
            @RequestParam(required = false) List<String> categories,
            @RequestParam(required = false) List<Long> productIds) {
        return ResponseEntity.ok().build();
    }

    @GetMapping("/inventory-value")
    @Operation(summary = "Get inventory value report")
    public ResponseEntity<InventoryValueReportDTO> getInventoryValueReport(
            @RequestParam(required = false) List<Long> warehouseIds) {
        return ResponseEntity.ok().build();
    }

    @GetMapping("/top-products")
    @Operation(summary = "Get top selling products report")
    public ResponseEntity<TopProductsReportDTO> getTopProductsReport(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate,
            @RequestParam(defaultValue = "10") int limit) {
        return ResponseEntity.ok().build();
    }
}