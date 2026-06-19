package com.kicktippx.dashboard;

import java.util.List;

public record DashboardDto(int openTips, int liveMatches, List<String> rounds, int currentRank, List<String> activities) {}
