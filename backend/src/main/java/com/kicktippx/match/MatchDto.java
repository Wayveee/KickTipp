package com.kicktippx.match;

import java.time.OffsetDateTime;

public record MatchDto(Long id, String league, String season, int matchday, String homeTeam, String awayTeam,
                       OffsetDateTime kickoffTime, Integer homeScore, Integer awayScore, MatchStatus status) {}
