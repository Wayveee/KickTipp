import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '/api',
  headers: { 'Content-Type': 'application/json' },
});

export type MatchStatus = 'SCHEDULED' | 'LIVE' | 'HALFTIME' | 'FINISHED' | 'CANCELLED';

export interface MatchDto {
  id: number;
  league: string;
  season: string;
  matchday: number;
  homeTeam: string;
  awayTeam: string;
  kickoffTime: string;
  homeScore: number | null;
  awayScore: number | null;
  status: MatchStatus;
}

export interface DashboardDto {
  openTips: number;
  liveMatches: number;
  rounds: string[];
  currentRank: number;
  activities: string[];
}

export interface RoundDto {
  id: number;
  name: string;
  description: string;
  joinCode: string;
  owner: string;
  isPublic: boolean;
  members: number;
}

export interface LeaderboardEntry {
  rank: number;
  username: string;
  points: number;
  exactResults: number;
  tendencies: number;
}
