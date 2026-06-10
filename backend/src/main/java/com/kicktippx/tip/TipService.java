package com.kicktippx.tip;

import java.time.Clock;
import java.time.OffsetDateTime;
import org.springframework.stereotype.Service;

@Service
public class TipService {
  private final Clock clock;

  public TipService(Clock clock) {
    this.clock = clock;
  }

  public TipDtos.TipResponse submit(TipDtos.TipRequest request) {
    if (!OffsetDateTime.now(clock).isBefore(request.kickoffTime())) {
      throw new IllegalArgumentException("Tipps sind ab Anpfiff gesperrt.");
    }
    return new TipDtos.TipResponse(request.roundId(), request.matchId(), request.homeGoals(), request.awayGoals(), 0, false);
  }
}
