import { Bracket, Matches, Players } from '../../data/Interfaces';

import Match from './Match';
import { ReactElement } from 'react';

interface TournemantBracketProps {
  brackets: Bracket[][];
  matches: Matches;
  players: Players;
}

export default function TournamentBracket({ brackets, matches, players }: TournemantBracketProps): ReactElement {
  return (
    <svg>
      {brackets.map((subBrackets, round) => {
        return subBrackets.map(({ matchId }, i) => {
          const match = matches[matchId];
          const player1 = players[match.player1!] || null;
          const player2 = players[match.player2!] || null;
          return <Match key={matchId} match={match} player1={player1} player2={player2} y={i * 80} x={round * 300} />;
        });
      })}
    </svg>
  );
}
