import { Bracket, Match as MatchInterface, Matches, Player, Players } from '../../data/Interfaces';
import Match, { height, width } from './Match';
import { ReactElement, useMemo } from 'react';

interface TournemantBracketProps {
  brackets: Bracket[][];
  matches: Matches;
  players: Players;
}

const spaceBetweenRows = 20;
const spaceBetweenColumns = 50;

const heigthWithSpace = spaceBetweenRows + height;
const widthWithSpace = spaceBetweenColumns + width;

interface MatchPosition {
  match: MatchInterface;
  player1: Player | null;
  player2: Player | null;
  x: number;
  y: number;
}

function calculateBracketPositions(
  brackets: Bracket[][],
  matches: Matches,
  players: Players,
): Map<number, MatchPosition> {
  const result: Map<number, MatchPosition> = new Map();
  for (let round = 0; round < brackets.length; ++round) {
    const subBrackets = brackets[round];
    for (let matchNr = 0; matchNr < subBrackets.length; ++matchNr) {
      const { matchId } = subBrackets[matchNr];
      const match = matches[matchId];
      const player1 = players[match.player1!] || null;
      const player2 = players[match.player2!] || null;
      result.set(matchId, {
        match,
        player1,
        player2,
        x: round * widthWithSpace,
        y: matchNr * heigthWithSpace,
      });
    }
  }
  return result;
}

export default function TournamentBracket({ brackets, matches, players }: TournemantBracketProps): ReactElement {
  const bracketPositions = useMemo(() => calculateBracketPositions(brackets, matches, players), [
    brackets,
    matches,
    players,
  ]);
  return (
    <svg width={brackets.length * widthWithSpace} height={brackets[0].length * heigthWithSpace}>
      {[...bracketPositions.values()].map(({ match, player1, player2, x, y }) => {
        return <Match key={match.id} match={match} player1={player1} player2={player2} y={y} x={x} />;
      })}
    </svg>
  );
}
