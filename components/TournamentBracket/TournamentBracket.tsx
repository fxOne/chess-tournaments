import { Bracket, Matches, Players } from '../../data/Interfaces';
import { ReactElement, useMemo } from 'react';
import { calculateBracketPositions, calculateSvgSize } from './Calculations';

import Match from './Match';

interface TournemantBracketProps {
  brackets: Bracket[][];
  matches: Matches;
  players: Players;
}

export default function TournamentBracket({ brackets, matches, players }: TournemantBracketProps): ReactElement {
  const { bracketPositions, height, width } = useMemo(() => {
    const bracketPositions = calculateBracketPositions(brackets, matches, players);
    const { width, height } = calculateSvgSize(bracketPositions);
    return { bracketPositions, height, width };
  }, [brackets, matches, players]);
  return (
    <svg width={width} height={height}>
      {[...bracketPositions.values()].map(({ match, player1, player2, x, y }) => {
        return <Match key={match.id} match={match} player1={player1} player2={player2} y={y} x={x} />;
      })}
    </svg>
  );
}
