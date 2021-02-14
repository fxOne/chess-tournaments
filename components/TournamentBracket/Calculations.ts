import { Bracket, Match, MatchPredecessors, Matches, Player, Players } from '../../data/Interfaces';
import { matchHeight, matchWidth } from './Match';

const spaceBetweenRows = 20;
const spaceBetweenColumns = 50;

const heigthWithSpace = spaceBetweenRows + matchHeight;
const widthWithSpace = spaceBetweenColumns + matchWidth;

interface MatchPosition {
  match: Match;
  player1: Player | null;
  player2: Player | null;
  x: number;
  y: number;
}

type MatchPositionList = Map<number, MatchPosition>;

function getYFromPositionList(id: number | null, positionList: MatchPositionList): number | null {
  if (id) {
    const position = positionList.get(id);
    if (position) {
      return position.y;
    }
  }
  return null;
}

function calculateY(
  round: number,
  matchNr: number,
  predecessors: MatchPredecessors,
  positionList: MatchPositionList,
): number {
  let result = matchNr * heigthWithSpace;
  if (round === 0) {
    //add padding for first row because of player number
    result += matchHeight;
  } else if (predecessors) {
    const y1 = getYFromPositionList(predecessors[0], positionList);
    const y2 = getYFromPositionList(predecessors[1], positionList);

    if (y1 !== null && y2 !== null) {
      result = (y2 - y1) * 0.5 + y1;
    } else if (y2 === null && y1 !== null) {
      result = y1 + matchHeight;
    }
  }

  return result;
}

export function calculateBracketPositions(
  brackets: Bracket[][],
  matches: Matches,
  players: Players,
): MatchPositionList {
  const results: MatchPositionList = new Map();
  for (let round = 0; round < brackets.length; ++round) {
    const subBrackets = brackets[round];
    for (let matchNr = 0; matchNr < subBrackets.length; ++matchNr) {
      const { matchId, predecessors } = subBrackets[matchNr];
      const match = matches[matchId];
      const player1 = players[match.player1!] || null;
      const player2 = players[match.player2!] || null;
      results.set(matchId, {
        match,
        player1,
        player2,
        x: round * widthWithSpace,
        y: calculateY(round, matchNr, predecessors, results),
      });
    }
  }
  return results;
}

interface Size {
  width: number;
  height: number;
}

export function calculateSvgSize(brackets: MatchPositionList): Size {
  let width = 0;
  let height = 0;

  for (const [, { x, y }] of brackets) {
    width = Math.max(width, x);
    height = Math.max(height, y);
  }

  width += matchWidth;
  height += matchHeight;

  return { height, width };
}

export function calculatePoints(match: Match, playerId?: number): number | null {
  let result: number | null = null;

  if (playerId && match.series.length) {
    result = 0;
    for (const serie of match.series) {
      for (const game of serie.games) {
        if (game.userIdWhite === playerId) {
          result += game.result;
        } else if (game.userIdBlack === playerId) {
          result += 1 - game.result;
        }
      }
    }
  }

  return result;
}
