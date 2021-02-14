import { Match as MatchInterface, Player } from '../../data/Interfaces';

import PlayerMatch from './PlayerMatch';
import { ReactElement } from 'react';

interface MatchProps {
  match: MatchInterface;
  player1: Player | null;
  player2: Player | null;
  x?: number;
  y?: number;
}

export const matchHeight = 60;
export const matchWidth = 270;

export default function Match({ match, player1, player2, x = 0, y = 0 }: MatchProps): ReactElement {
  return (
    <g id={`match-${match.id}`} transform={`translate(${x}, ${y})`}>
      <PlayerMatch player={player1} points={13} />
      <PlayerMatch player={player2} points={10} y={30} />
    </g>
  );
}
