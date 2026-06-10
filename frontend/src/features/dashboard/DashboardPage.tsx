import { useQuery } from '@tanstack/react-query';
import { api, DashboardDto } from '../../api/client';
import { StatCard } from '../../components/StatCard';

export function DashboardPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['dashboard-preview'],
    queryFn: async () => (await api.get<DashboardDto>('/dashboard/preview')).data,
  });

  if (isLoading) {
    return <div className="grid gap-4 md:grid-cols-4"><div className="skeleton h-36" /><div className="skeleton h-36" /><div className="skeleton h-36" /><div className="skeleton h-36" /></div>;
  }

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-stadium via-blue-950 to-emerald-950 p-8 text-white shadow-glow">
        <p className="text-sm uppercase tracking-[0.4em] text-mint">Fokus FIFA WM 2026</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-6xl">Tippe mit Freunden, verfolge Live-Ergebnisse und klettere in Echtzeit im Ranking.</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <button className="rounded-full bg-pitch px-6 py-3 font-bold text-stadium">Tipprunde erstellen</button>
          <button className="rounded-full border border-white/30 px-6 py-3 font-bold">Per Join-Code beitreten</button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <StatCard label="Offene Tipps" value={data?.openTips ?? 0} helper="vor Anpfiff abgeben" />
        <StatCard label="Heute live" value={data?.liveMatches ?? 0} helper="WebSocket Push" />
        <StatCard label="Meine Runden" value={data?.rounds.length ?? 0} helper="privat & öffentlich" />
        <StatCard label="Aktueller Platz" value={`#${data?.currentRank ?? '-'}`} helper="sortiert nach Punkten" />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 dark:bg-white/10">
          <h3 className="text-xl font-black">Letzte Aktivitäten</h3>
          <ul className="mt-4 space-y-3">
            {data?.activities.map((activity) => <li key={activity} className="rounded-2xl bg-slate-100 p-4 dark:bg-white/10">{activity}</li>)}
          </ul>
        </div>
        <div className="rounded-3xl bg-white p-6 dark:bg-white/10">
          <h3 className="text-xl font-black">Benachrichtigungen</h3>
          <p className="mt-4 text-slate-500 dark:text-white/70">Spiel startet bald, Tipp fehlt, Runde beigetreten und Spieltag beendet werden als In-App-Events ausgeliefert.</p>
        </div>
      </section>
    </div>
  );
}
