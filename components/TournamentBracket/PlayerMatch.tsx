import { ReactElement } from 'react';
import { Player } from '../../data/Interfaces';
import PlayerScore from '../ui/PlayerScore';
import PlayerTitle from '../ui/PlayerTitle';

interface PlayerMatchProps {
  player: Player | null;
  points: number | null;
  y?: number;
}

export const height = 30;
const strokeWidth = 1;
const heightWithStroke = height + 2 * strokeWidth;
const textWidth = 200;
const pointsWidth = 45;
const titleWidth = 30;
export const width = textWidth + pointsWidth;

export default function PlayerMatch({ player, points, y = 0 }: PlayerMatchProps): ReactElement {
  return (
    <g transform={`translate(0, ${y})`}>
      <rect x="0" y="0" width={textWidth} height={height} fill="#FFF" stroke="#888" strokeWidth={strokeWidth} />
      <rect
        x={textWidth}
        y="0"
        width={pointsWidth}
        height={height}
        fill="#EEE"
        stroke="#888"
        strokeWidth={strokeWidth}
      />
      {player && (
        <PlayerTitle
          title={player.title}
          as={'text'}
          x="5"
          y={heightWithStroke / 2}
          width={titleWidth}
          height={height}
          alignmentBaseline={'middle'}
        >
          {player.title}
        </PlayerTitle>
      )}
      <text
        x={titleWidth + 10}
        y={heightWithStroke / 2}
        width={textWidth - titleWidth - 10}
        alignmentBaseline={'middle'}
      >
        {player?.name}
      </text>
      <PlayerScore
        as={'text'}
        x={textWidth + pointsWidth - 5}
        y={heightWithStroke / 2}
        width="43"
        textAnchor={'end'}
        alignmentBaseline={'middle'}
      >
        {points}
      </PlayerScore>
    </g>
  );
}
