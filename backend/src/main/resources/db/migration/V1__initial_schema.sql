create table app_user (
  id bigserial primary key,
  username varchar(40) not null unique,
  email varchar(255) not null unique,
  password_hash varchar(255),
  google_id varchar(255),
  avatar_url varchar(1024),
  favorite_team varchar(120),
  created_at timestamptz not null default now(),
  total_points integer not null default 0
);

create table betting_round (
  id bigserial primary key,
  name varchar(120) not null,
  description text,
  join_code varchar(32) not null unique,
  owner_id bigint references app_user(id),
  is_public boolean not null default false,
  created_at timestamptz not null default now()
);

create table round_member (
  id bigserial primary key,
  round_id bigint not null references betting_round(id) on delete cascade,
  user_id bigint not null references app_user(id) on delete cascade,
  role varchar(32) not null check (role in ('USER', 'ROUND_ADMIN', 'SYSTEM_ADMIN')),
  unique (round_id, user_id)
);

create table football_match (
  id bigserial primary key,
  league varchar(120) not null,
  season varchar(20) not null,
  matchday integer not null,
  home_team varchar(120) not null,
  away_team varchar(120) not null,
  kickoff_time timestamptz not null,
  home_score integer,
  away_score integer,
  status varchar(32) not null check (status in ('SCHEDULED', 'LIVE', 'HALFTIME', 'FINISHED', 'CANCELLED'))
);

create table tip (
  id bigserial primary key,
  round_id bigint not null references betting_round(id) on delete cascade,
  user_id bigint not null references app_user(id) on delete cascade,
  match_id bigint not null references football_match(id) on delete cascade,
  home_goals integer not null check (home_goals >= 0),
  away_goals integer not null check (away_goals >= 0),
  points integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (round_id, user_id, match_id)
);

create table notification (
  id bigserial primary key,
  user_id bigint not null references app_user(id) on delete cascade,
  title varchar(120) not null,
  text text not null,
  read boolean not null default false,
  created_at timestamptz not null default now()
);

insert into football_match (league, season, matchday, home_team, away_team, kickoff_time, status) values
('FIFA World Cup', '2026', 1, 'Mexico', 'South Africa', '2026-06-11T19:00:00Z', 'SCHEDULED'),
('FIFA World Cup', '2026', 1, 'United States', 'Germany', '2026-06-12T01:00:00Z', 'SCHEDULED'),
('FIFA World Cup', '2026', 1, 'Canada', 'Brazil', '2026-06-12T22:00:00Z', 'SCHEDULED');
