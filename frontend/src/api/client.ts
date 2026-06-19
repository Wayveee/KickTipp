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

export const demoDashboard: DashboardDto = {
  openTips: 6,
  liveMatches: 0,
  rounds: ['WM 2026 Freunde', 'Büro-Tipprunde'],
  currentRank: 2,
  activities: ['Mira ist der Runde beigetreten', 'Deutschland gegen USA ist offen für Tipps', 'Spieltag 1 wurde importiert'],
};

export const demoMatches: MatchDto[] = [
  { id: 1, league: 'FIFA World Cup', season: '2026', matchday: 1, homeTeam: 'Mexico', awayTeam: 'South Africa', kickoffTime: '2026-06-11T19:00:00Z', homeScore: null, awayScore: null, status: 'SCHEDULED' },
  { id: 2, league: 'FIFA World Cup', season: '2026', matchday: 1, homeTeam: 'United States', awayTeam: 'Germany', kickoffTime: '2026-06-12T01:00:00Z', homeScore: null, awayScore: null, status: 'SCHEDULED' },
  { id: 3, league: 'FIFA World Cup', season: '2026', matchday: 1, homeTeam: 'Canada', awayTeam: 'Brazil', kickoffTime: '2026-06-12T22:00:00Z', homeScore: null, awayScore: null, status: 'SCHEDULED' },
];

export const demoRounds: RoundDto[] = [
  { id: 1, name: 'WM 2026 Freunde', description: 'Private Runde für die Gruppenphase und K.-o.-Runde', joinCode: 'WM2026', owner: 'alex', isPublic: true, members: 18 },
  { id: 2, name: 'Büro-Tipprunde', description: 'Öffentliche Demo-Runde mit Standardwertung', joinCode: 'OFFICE', owner: 'mira', isPublic: true, members: 42 },
];

export const demoLeaderboard: LeaderboardEntry[] = [
  { rank: 1, username: 'Mira', points: 38, exactResults: 4, tendencies: 9 },
  { rank: 2, username: 'Alex', points: 38, exactResults: 3, tendencies: 10 },
  { rank: 3, username: 'Sam', points: 31, exactResults: 2, tendencies: 8 },
];

async function getWithFallback<T>(url: string, fallback: T): Promise<T> {
  try {
    return (await api.get<T>(url)).data;
  } catch {
    return fallback;
  }
}

export const fetchDashboardPreview = () => getWithFallback('/dashboard/preview', demoDashboard);
export const fetchMatches = () => getWithFallback('/matches', demoMatches);
export const fetchPublicRounds = () => getWithFallback('/rounds/public', demoRounds);
export const fetchLeaderboard = () => getWithFallback('/leaderboard/demo', demoLeaderboard);
