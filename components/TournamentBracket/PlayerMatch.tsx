import { Player } from '../../data/Interfaces';
import { ReactElement } from 'react';
import Title from '../ui/Title';

interface PlayerMatchProps {
  player: Player | null;
  points: number | null;
  y?: number;
}

export const height = 30;
const textWidth = 250;
const pointsWidth = 45;
const titleWidth = 30;
export const width = textWidth + pointsWidth;

export default function PlayerMatch({ player, points, y = 0 }: PlayerMatchProps): ReactElement {
  return (
    <g transform={`translate(0, ${y})`}>
      <rect x="0" y="0" width={textWidth} height={height} fill="#C4C4C4" stroke="black" />
      <rect x={textWidth} y="0" width={pointsWidth} height={height} fill="#C4C4C4" stroke="black" />
      {player && (
        <Title as={'text'} title={player.title} x="5" y="24" width={titleWidth} height={height - 2}>
          {player.title}
        </Title>
      )}
      <text x={titleWidth + 10} y="24" width={textWidth - titleWidth - 10} height={height - 2}>
        {player?.name}
      </text>
      <text x={textWidth + pointsWidth - 5} y="24" width="43" height={height - 2} textAnchor={'end'}>
        {points}
      </text>
    </g>
  );
}
