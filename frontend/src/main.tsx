import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { DashboardPage } from './features/dashboard/DashboardPage';
import { LoginPage } from './features/auth/LoginPage';
import { LiveCenterPage } from './features/matches/LiveCenterPage';
import { RankingPage } from './features/ranking/RankingPage';
import { RoundsPage } from './features/rounds/RoundsPage';
import './styles/index.css';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'rounds', element: <RoundsPage /> },
      { path: 'matches', element: <LiveCenterPage /> },
      { path: 'ranking', element: <RankingPage /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
