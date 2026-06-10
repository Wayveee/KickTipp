interface StatCardProps {
  label: string;
  value: string | number;
  helper: string;
}

export function StatCard({ label, value, helper }: StatCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white p-5 shadow-glow dark:bg-white/10">
      <p className="text-sm text-slate-500 dark:text-white/60">{label}</p>
      <strong className="mt-2 block text-4xl font-black">{value}</strong>
      <span className="mt-3 block text-sm text-pitch">{helper}</span>
    </article>
  );
}
