package com.kicktippx.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class AuthDtos {
  public record RegisterRequest(@NotBlank @Size(min = 3, max = 40) String username,
                                @Email @NotBlank String email,
                                @NotBlank @Size(min = 8, max = 120) String password) {}
  public record LoginRequest(@Email @NotBlank String email, @NotBlank String password) {}
  public record AuthResponse(String accessToken, String refreshToken, String tokenType, long expiresInSeconds) {}
}
