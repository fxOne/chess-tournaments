import { Match as MatchInterface, Player } from '../../data/Interfaces';
import PlayerMatch, { height, width } from './PlayerMatch';

import { ReactElement } from 'react';
import { calculatePoints } from './Calculations';

interface MatchProps {
  match: MatchInterface;
  player1: Player | null;
  player2: Player | null;
  x?: number;
  y?: number;
}

export const matchHeight = height * 2;
export const matchWidth = width;

export default function Match({ match, player1, player2, x = 0, y = 0 }: MatchProps): ReactElement {
  return (
    <g id={`match-${match.id}`} transform={`translate(${x}, ${y})`}>
      <PlayerMatch player={player1} points={calculatePoints(match, player1?.id)} />
      <PlayerMatch player={player2} points={calculatePoints(match, player2?.id)} y={30} />
    </g>
  );
}
