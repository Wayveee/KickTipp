package com.kicktippx.common;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
  @ExceptionHandler(IllegalArgumentException.class)
  ResponseEntity<ApiError> badRequest(IllegalArgumentException ex, HttpServletRequest request) {
    return ResponseEntity.badRequest().body(ApiError.of(400, ex.getMessage(), request.getRequestURI()));
  }

  @ExceptionHandler(MethodArgumentNotValidException.class)
  ResponseEntity<ApiError> validation(MethodArgumentNotValidException ex, HttpServletRequest request) {
    String message = ex.getBindingResult().getFieldErrors().stream()
        .findFirst()
        .map(error -> error.getField() + ": " + error.getDefaultMessage())
        .orElse("Validation failed");
    return ResponseEntity.badRequest().body(ApiError.of(400, message, request.getRequestURI()));
  }

  @ExceptionHandler(Exception.class)
  ResponseEntity<ApiError> generic(Exception ex, HttpServletRequest request) {
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
        .body(ApiError.of(500, "Unexpected server error", request.getRequestURI()));
  }
}
