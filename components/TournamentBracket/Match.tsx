import { ReactElement } from 'react';
import { Match as MatchInterface, Player } from '../../data/Interfaces';
import Link from '../Link';
import { calculatePoints } from './Calculations';
import PlayerMatch, { height, width } from './PlayerMatch';

interface MatchProps {
  getLinkUrl(id: number): string;
  match: MatchInterface;
  player1: Player | null;
  player2: Player | null;
  x?: number;
  y?: number;
}

export const matchHeight = height * 2;
export const matchWidth = width;

export default function Match({ match, player1, player2, x = 0, y = 0, getLinkUrl }: MatchProps): ReactElement {
  const hasGames = match.series.length > 0;
  return (
    <g id={`match-${match.id}`} transform={`translate(${x}, ${y})`}>
      {hasGames && (
        <Link href={getLinkUrl(match.id)}>
          <a>
            <PlayerMatch player={player1} points={calculatePoints(match, player1?.id)} />
            <PlayerMatch player={player2} points={calculatePoints(match, player2?.id)} y={height} />
          </a>
        </Link>
      )}
      {!hasGames && (
        <>
          <PlayerMatch player={player1} points={calculatePoints(match, player1?.id)} />
          <PlayerMatch player={player2} points={calculatePoints(match, player2?.id)} y={height} />
        </>
      )}
    </g>
  );
}
