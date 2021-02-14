import { Bracket, Matches, Players } from '../../data/Interfaces';
import { ReactElement, useMemo } from 'react';
import { calculateBracketPositions, calculateLines, calculateSvgSize } from './Calculations';

import Line from './Line';
import Match from './Match';

interface TournemantBracketProps {
  brackets: Bracket[][];
  matches: Matches;
  players: Players;
}

export default function TournamentBracket({ brackets, matches, players }: TournemantBracketProps): ReactElement {
  const { bracketPositions, height, lines, width } = useMemo(() => {
    const bracketPositions = calculateBracketPositions(brackets, matches, players);
    const { width, height } = calculateSvgSize(bracketPositions);
    const lines = calculateLines(bracketPositions);
    return { bracketPositions, height, lines, width };
  }, [brackets, matches, players]);
  return (
    <svg width={width} height={height}>
      <g>
        {[...bracketPositions.values()].map(({ match, player1, player2, x, y }) => {
          return <Match key={match.id} match={match} player1={player1} player2={player2} y={y} x={x} />;
        })}
      </g>
      <g>
        {lines.map((line, i) => (
          <Line key={i} {...line} />
        ))}
      </g>
    </svg>
  );
}
