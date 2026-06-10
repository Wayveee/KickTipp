package com.kicktippx.tip;

import org.springframework.stereotype.Service;

@Service
public class ScoringService {
  public int score(int tipHome, int tipAway, int actualHome, int actualAway) {
    if (tipHome == actualHome && tipAway == actualAway) {
      return 5;
    }
    int tipDiff = Integer.compare(tipHome - tipAway, 0);
    int actualDiff = Integer.compare(actualHome - actualAway, 0);
    if (tipHome - tipAway == actualHome - actualAway) {
      return 3;
    }
    if (tipDiff == actualDiff) {
      return 2;
    }
    return 0;
  }
}
