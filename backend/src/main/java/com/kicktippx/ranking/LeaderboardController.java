package com.kicktippx.ranking;

import java.util.Comparator;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/leaderboard")
public class LeaderboardController {
  @GetMapping("/demo")
  List<LeaderboardEntry> demo() {
    return List.of(
        new LeaderboardEntry(1, "Mira", 38, 4, 9),
        new LeaderboardEntry(2, "Alex", 38, 3, 10),
        new LeaderboardEntry(3, "Sam", 31, 2, 8))
        .stream()
        .sorted(Comparator.comparingInt(LeaderboardEntry::points).reversed()
            .thenComparing(Comparator.comparingInt(LeaderboardEntry::exactResults).reversed())
            .thenComparing(Comparator.comparingInt(LeaderboardEntry::tendencies).reversed()))
        .toList();
  }
}
