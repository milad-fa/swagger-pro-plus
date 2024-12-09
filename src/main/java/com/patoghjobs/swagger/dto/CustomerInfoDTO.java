package com.patoghjobs.swagger.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;


@Data
public class CustomerInfoDTO {
    @NotBlank(message = "Name is required")
    private String name;

    @Email(message = "Valid email is required")
    private String email;

    @Valid
    private AddressDTO shippingAddress;

    @Valid
    private AddressDTO billingAddress;
}