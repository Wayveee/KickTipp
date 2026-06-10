package com.kicktippx.match;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/matches")
public class MatchController {
  private final MatchService matchService;

  public MatchController(MatchService matchService) {
    this.matchService = matchService;
  }

  @GetMapping
  List<MatchDto> matches() {
    return matchService.upcoming();
  }

  @GetMapping("/live")
  List<MatchDto> live() {
    return matchService.live();
  }
}
