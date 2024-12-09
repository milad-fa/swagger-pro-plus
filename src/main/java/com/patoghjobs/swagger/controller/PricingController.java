package com.patoghjobs.swagger.controller;

import com.patoghjobs.swagger.dto.BulkDiscountDTO;
import com.patoghjobs.swagger.dto.PriceRuleCreateDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;


@RestController
@RequestMapping("/api/v1/pricing")
@Tag(name = "Pricing Management", description = "Price and discount management")
public class PricingController {

    @PostMapping("/products/{productId}/price-rules")
    @Operation(summary = "Create price rule")
    public ResponseEntity<PriceRuleCreateDTO> createPriceRule(
            @PathVariable Long productId,
            @RequestBody @Valid PriceRuleCreateDTO priceRuleDTO) {
        return ResponseEntity.ok().build();
    }

    @PostMapping("/bulk-discounts")
    @Operation(summary = "Apply bulk discounts")
    public ResponseEntity<BulkDiscountDTO> applyBulkDiscounts(
            @RequestBody @Valid BulkDiscountDTO discountDTO) {
        return ResponseEntity.ok().build();
    }

    @GetMapping("/products/{productId}/price-history")
    @Operation(summary = "Get price history")
    public ResponseEntity<List<PriceHistoryDTO>> getPriceHistory(
            @PathVariable Long productId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        return ResponseEntity.ok().build();
    }
}