import { useQuery } from '@tanstack/react-query';
import { io } from 'socket.io-client';
import { useEffect } from 'react';
import { fetchMatches } from '../../api/client';

export function LiveCenterPage() {
  const { data } = useQuery({ queryKey: ['matches'], queryFn: fetchMatches });

  useEffect(() => {
    const socket = io('/ws/live', { transports: ['websocket'], autoConnect: false });
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-pitch">Live Center</p>
        <h2 className="text-4xl font-black">WM 2026 Spiele</h2>
      </div>
      <div className="grid gap-4">
        {data?.map((match) => (
          <article key={match.id} className="rounded-3xl bg-white p-5 dark:bg-white/10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500 dark:text-white/60">{match.league} · Spieltag {match.matchday}</p>
                <h3 className="mt-2 text-2xl font-black">{match.homeTeam} vs. {match.awayTeam}</h3>
              </div>
              <span className="rounded-full bg-pitch/15 px-4 py-2 text-sm font-bold text-pitch">{match.status}</span>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-100 p-4 dark:bg-stadium">Anstoß: {new Date(match.kickoffTime).toLocaleString()}</div>
              <div className="rounded-2xl bg-slate-100 p-4 dark:bg-stadium">Score: {match.homeScore ?? '-'} : {match.awayScore ?? '-'}</div>
              <div className="rounded-2xl bg-slate-100 p-4 dark:bg-stadium">Ticker: Tore, Karten, Wechsel</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
