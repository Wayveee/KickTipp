import { NavLink, Outlet } from 'react-router-dom';
import { useThemeStore } from '../store/themeStore';

const navItems = [
  ['/', 'Dashboard'],
  ['/rounds', 'Tipprunden'],
  ['/matches', 'Live Center'],
  ['/ranking', 'Ranking'],
] as const;

export function AppShell() {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <main className="min-h-screen bg-slate-50 text-stadium dark:bg-stadium dark:text-white">
        <header className="sticky top-0 z-10 border-b border-white/10 bg-stadium/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-pitch">WM 2026</p>
              <h1 className="text-2xl font-black">KickTippX</h1>
            </div>
            <nav className="hidden gap-2 md:flex">
              {navItems.map(([to, label]) => (
                <NavLink key={to} to={to} className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-semibold ${isActive ? 'bg-pitch text-stadium' : 'text-white/75 hover:bg-white/10'}`}>
                  {label}
                </NavLink>
              ))}
            </nav>
            <button onClick={toggleTheme} className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white">
              {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
          </div>
        </header>
        <section className="mx-auto max-w-7xl px-4 py-8">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
