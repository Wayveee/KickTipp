package com.kicktippx.auth;

import jakarta.validation.Valid;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
  private final JwtService jwtService;
  private final PasswordEncoder passwordEncoder;

  public AuthController(JwtService jwtService, PasswordEncoder passwordEncoder) {
    this.jwtService = jwtService;
    this.passwordEncoder = passwordEncoder;
  }

  @PostMapping("/register")
  AuthDtos.AuthResponse register(@Valid @RequestBody AuthDtos.RegisterRequest request) {
    passwordEncoder.encode(request.password());
    return jwtService.issueTokens(request.email());
  }

  @PostMapping("/login")
  AuthDtos.AuthResponse login(@Valid @RequestBody AuthDtos.LoginRequest request) {
    return jwtService.issueTokens(request.email());
  }

  @GetMapping("/google")
  String googleLoginHint() {
    return "Configure GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET, then use /oauth2/authorization/google.";
  }
}
