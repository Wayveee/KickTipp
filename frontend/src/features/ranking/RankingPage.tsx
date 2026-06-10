import { useQuery } from '@tanstack/react-query';
import { api, LeaderboardEntry } from '../../api/client';

export function RankingPage() {
  const { data } = useQuery({ queryKey: ['leaderboard'], queryFn: async () => (await api.get<LeaderboardEntry[]>('/leaderboard/demo')).data });
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-black">Rangliste</h2>
      <div className="overflow-hidden rounded-3xl bg-white dark:bg-white/10">
        <table className="w-full text-left">
          <thead className="bg-stadium text-white"><tr><th className="p-4">Platz</th><th>Name</th><th>Punkte</th><th>Exakt</th><th>Tendenzen</th></tr></thead>
          <tbody>
            {data?.map((entry) => <tr key={entry.username} className="border-t border-slate-200 dark:border-white/10"><td className="p-4 font-black">#{entry.rank}</td><td>{entry.username}</td><td>{entry.points}</td><td>{entry.exactResults}</td><td>{entry.tendencies}</td></tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
