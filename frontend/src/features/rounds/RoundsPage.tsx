import { useQuery } from '@tanstack/react-query';
import { fetchPublicRounds } from '../../api/client';

export function RoundsPage() {
  const { data } = useQuery({ queryKey: ['public-rounds'], queryFn: fetchPublicRounds });
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-black">Tipprunden</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {data?.map((round) => (
          <article key={round.id} className="rounded-3xl bg-white p-6 dark:bg-white/10">
            <div className="flex items-start justify-between gap-4">
              <div><h3 className="text-2xl font-black">{round.name}</h3><p className="mt-2 text-slate-500 dark:text-white/70">{round.description}</p></div>
              <span className="rounded-full bg-pitch px-3 py-1 text-xs font-black text-stadium">{round.joinCode}</span>
            </div>
            <p className="mt-5 text-sm">{round.members} Mitglieder · Admin: {round.owner}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
