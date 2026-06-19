package com.kicktippx.notification;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/notifications")
public class NotificationController {
  @GetMapping
  List<NotificationDto> mine() {
    return List.of(new NotificationDto(1L, "Tipp fehlt", "Dein Tipp für Mexico - South Africa fehlt noch.", false));
  }
}
