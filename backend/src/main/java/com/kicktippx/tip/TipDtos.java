package com.kicktippx.tip;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import java.time.OffsetDateTime;

public class TipDtos {
  public record TipRequest(@NotNull Long roundId, @NotNull Long matchId, @Min(0) int homeGoals, @Min(0) int awayGoals,
                           @NotNull OffsetDateTime kickoffTime) {}
  public record TipResponse(Long roundId, Long matchId, int homeGoals, int awayGoals, int points, boolean locked) {}
}
