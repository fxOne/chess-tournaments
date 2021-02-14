export interface Bracket {
  matchId: number;
  predecessors: MatchPredecessors;
}

export type MatchPredecessors = null | [number | null, number | null];

export interface Game {
  lichessUrl: string;
  userIdWhite: number;
  userIdBlack: number;
  result: 0 | 0.5 | 1;
}

export interface Series {
  games: Game[];
}

export interface Match {
  id: number;
  date: string;
  series: Series[];
  player1: number | null;
  player2: number | null;
  videoUrl: string;
}

export type Matches = Record<number, Match>;

export interface Player {
  name: string;
  id: number;
  title: 'GM' | 'IM';
}

export type Players = Record<number, Player>;
