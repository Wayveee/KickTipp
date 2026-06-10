package com.kicktippx.dashboard;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dashboard")
public class DashboardController {
  @GetMapping("/preview")
  DashboardDto preview() {
    return new DashboardDto(
        6,
        0,
        List.of("WM 2026 Freunde", "Büro-Tipprunde"),
        2,
        List.of("Mira ist der Runde beigetreten", "Deutschland gegen USA ist offen für Tipps", "Spieltag 1 wurde importiert"));
  }
}
