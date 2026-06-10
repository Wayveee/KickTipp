package com.kicktippx.match;

import java.time.OffsetDateTime;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class MatchService {
  private final List<MatchDto> worldCup2026 = List.of(
      new MatchDto(1L, "FIFA World Cup", "2026", 1, "Mexico", "South Africa", OffsetDateTime.parse("2026-06-11T19:00:00Z"), null, null, MatchStatus.SCHEDULED),
      new MatchDto(2L, "FIFA World Cup", "2026", 1, "United States", "Germany", OffsetDateTime.parse("2026-06-12T01:00:00Z"), null, null, MatchStatus.SCHEDULED),
      new MatchDto(3L, "FIFA World Cup", "2026", 1, "Canada", "Brazil", OffsetDateTime.parse("2026-06-12T22:00:00Z"), null, null, MatchStatus.SCHEDULED));

  public List<MatchDto> upcoming() {
    return worldCup2026;
  }

  public List<MatchDto> live() {
    return worldCup2026.stream().filter(match -> match.status() == MatchStatus.LIVE || match.status() == MatchStatus.HALFTIME).toList();
  }
}
