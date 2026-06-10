package com.kicktippx.auth;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.Date;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class JwtService {
  private final String secret;
  private final long accessMinutes;
  private final long refreshDays;

  public JwtService(@Value("${app.jwt.secret}") String secret,
                    @Value("${app.jwt.access-token-minutes}") long accessMinutes,
                    @Value("${app.jwt.refresh-token-days}") long refreshDays) {
    this.secret = secret;
    this.accessMinutes = accessMinutes;
    this.refreshDays = refreshDays;
  }

  public AuthDtos.AuthResponse issueTokens(String subject) {
    return new AuthDtos.AuthResponse(token(subject, accessMinutes * 60), token(subject + ":refresh", refreshDays * 24 * 3600), "Bearer", accessMinutes * 60);
  }

  private String token(String subject, long seconds) {
    Instant now = Instant.now();
    return Jwts.builder()
        .subject(subject)
        .issuedAt(Date.from(now))
        .expiration(Date.from(now.plusSeconds(seconds)))
        .signWith(Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8)))
        .compact();
  }
}
