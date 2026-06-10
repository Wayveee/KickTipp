package com.kicktippx.tip;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

class ScoringServiceTest {
  private final ScoringService scoringService = new ScoringService();

  @Test
  void awardsFivePointsForExactResult() {
    assertThat(scoringService.score(2, 1, 2, 1)).isEqualTo(5);
  }

  @Test
  void awardsThreePointsForCorrectGoalDifference() {
    assertThat(scoringService.score(3, 1, 2, 0)).isEqualTo(3);
  }

  @Test
  void awardsTwoPointsForCorrectTendency() {
    assertThat(scoringService.score(1, 0, 3, 1)).isEqualTo(2);
  }
}
