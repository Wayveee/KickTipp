package com.kicktippx.round;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rounds")
public class RoundController {
  @GetMapping("/public")
  List<RoundDto> publicRounds() {
    return List.of(
        new RoundDto(1L, "WM 2026 Freunde", "Private Runde für die Gruppenphase und K.-o.-Runde", "WM2026", "alex", true, 18),
        new RoundDto(2L, "Büro-Tipprunde", "Öffentliche Demo-Runde mit Standardwertung", "OFFICE", "mira", true, 42));
  }
}
