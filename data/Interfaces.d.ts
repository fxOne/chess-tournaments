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
  videoUrl: string | null;
  downloadLink: string | null;
  resultPlayer1?: string;
  resultPlayer2?: string;
}

export type Matches = Record<number, Match>;

export type PlayerTitle = 'GM' | 'IM' | 'FM' | 'CM' | 'NM' | 'WGM';
export type CountryCode = 'GER';
export interface Player {
  name: string;
  id: number;
  title?: PlayerTitle;
  elo: number;
  image: string | null;
  yearOfBirth?: number;
  lichessName?: string;
  countryCode?: CountryCode;
  streamerUrl?: string;
}

export type Players = Record<number, Player>;

export interface LichessGameResultPlayer {
  user: {
    name: string;
    title?: string;
    patron?: boolean;
    id: string;
  };
  rating: number;
  ratingDiff: number;
}

export interface LichessGameResult {
  id: string;
  rated: boolean;
  createdAt: number;
  lastMoveAt: number;
  status: 'resigned' | 'draw' | 'stalemate';
  players: {
    black: LichessGameResultPlayer;
    white: LichessGameResultPlayer;
  };
  winner?: 'black' | 'white';
  clock: {
    initial: number;
    increment: number;
    totalTime: number;
  };
}
