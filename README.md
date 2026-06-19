# KickTippX

KickTippX ist eine moderne Kicktipp-Alternative mit Fokus auf die FIFA WM 2026. Die Anwendung ist als produktionsnahes Monorepo aufgebaut und kombiniert ein React-Frontend mit einem Spring-Boot-Backend, PostgreSQL, Redis und Nginx.

## Funktionsumfang

- Registrierung mit E-Mail und Passwort sowie Vorbereitung für Google OAuth2 Login
- JWT-basierte Sessions mit Access- und Refresh-Token-Konzept
- Private und öffentliche Tipprunden mit Join-Code, Rollen und Ranglisten
- Tippabgabe mit serverseitiger Anstoßzeit-Prüfung (`now >= kickoff` wird abgelehnt)
- WM-2026-Spielverwaltung mit Live-Status, Ergebnissen und Live-Center
- Standardwertung: 5 Punkte exaktes Ergebnis, 3 Punkte Tordifferenz, 2 Punkte Tendenz
- Dashboard für offene Tipps, Live-Spiele, eigene Tipprunden, Ranking und Aktivitäten
- In-App-Benachrichtigungen und WebSocket-Kanal für Live-Updates
- Docker-Compose-Stack für lokale Entwicklung und produktionsnahe Ausführung

## Tech Stack

### Frontend

- React 19, TypeScript, Vite
- TailwindCSS, React Router, React Query
- Axios, Zustand, Socket.IO Client

### Backend

- Java 21, Spring Boot 3
- Spring Security, JWT, OAuth2 Client
- PostgreSQL, Flyway, Redis
- WebSocket/STOMP Support

## Projektstruktur

```text
backend/    Spring Boot API, Security, DTOs, Services, Repositories, Flyway
frontend/   React-App mit Dashboard, Runden, Live-Center und Ranking
nginx/      Reverse-Proxy-Konfiguration
docker-compose.yml
```

## Lokal starten

```bash
docker compose up --build
```

- Frontend: http://localhost:8080
- Backend API: http://localhost:8080/api
- PostgreSQL: localhost:5432
- Redis: localhost:6379

## Entwicklung ohne Docker

### Backend

```bash
cd backend
mvn spring-boot:run
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Umgebungsvariablen

| Variable | Beschreibung | Default |
| --- | --- | --- |
| `SPRING_DATASOURCE_URL` | JDBC-URL für PostgreSQL | `jdbc:postgresql://localhost:5432/kicktippx` |
| `SPRING_DATASOURCE_USERNAME` | Datenbanknutzer | `kicktippx` |
| `SPRING_DATASOURCE_PASSWORD` | Datenbankpasswort | `kicktippx` |
| `JWT_SECRET` | HMAC-Schlüssel für JWTs | Entwicklungswert |
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID | leer |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret | leer |
| `VITE_API_URL` | Backend-URL für das Frontend | `/api` |

## WM-2026-Fokus

Die Initialmigration legt eine `FIFA World Cup 2026`-kompatible Datenstruktur und WM-2026-Beispielspiele an. Echte Spiel- und Live-Daten können über Adapter für API-Football, SportMonks oder API-Sports importiert und per WebSocket an Clients verteilt werden.
