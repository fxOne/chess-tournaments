import { Player } from '../../data/Interfaces';
import { ReactElement } from 'react';

interface PlayerMatchProps {
  player: Player | null;
  points: number | null;
  y?: number;
}

export default function PlayerMatch({ player, points, y = 0 }: PlayerMatchProps): ReactElement {
  return (
    <g transform={`translate(0, ${y})`}>
      <rect x="0" y="0" width="220" height="30" fill="#C4C4C4" stroke="black" />
      <rect x="220" y="0" width="45" height="30" fill="#C4C4C4" stroke="black" />
      <text x="5" y="24" width="190" height="28">
        {player?.name}
      </text>
      <text x="260" y="24" width="43" height="28" textAnchor={'end'}>
        {points}
      </text>
    </g>
  );
}
