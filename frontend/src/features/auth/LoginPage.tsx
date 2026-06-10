export function LoginPage() {
  return (
    <div className="mx-auto max-w-md rounded-3xl bg-white p-8 dark:bg-white/10">
      <p className="text-pitch">Willkommen zurück</p>
      <h2 className="mt-2 text-3xl font-black">Einloggen</h2>
      <form className="mt-6 space-y-4">
        <input className="w-full rounded-2xl border border-slate-200 bg-transparent p-4" type="email" placeholder="E-Mail" />
        <input className="w-full rounded-2xl border border-slate-200 bg-transparent p-4" type="password" placeholder="Passwort" />
        <button className="w-full rounded-2xl bg-pitch p-4 font-black text-stadium" type="button">Mit E-Mail einloggen</button>
        <button className="w-full rounded-2xl border border-white/20 p-4 font-black" type="button">Mit Google anmelden</button>
      </form>
    </div>
  );
}
