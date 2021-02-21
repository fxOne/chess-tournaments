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
  predecessors: MatchPredecessors;
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

function getXFromPositionList(id: number | null, positionList: MatchPositionList): number | null {
  if (id) {
    const position = positionList.get(id);
    if (position) {
      return position.x;
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

  return result + 1;
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
        predecessors,
        x: round * widthWithSpace + 1,
        y: calculateY(round, matchNr, predecessors, results),
      });
    }
  }
  return results;
}

interface LinePoint {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export function calculateLines(positionList: MatchPositionList): LinePoint[] {
  const result: LinePoint[] = [];

  for (const [, { predecessors, x, y }] of positionList) {
    if (predecessors) {
      const line1 = createLinePoint(positionList, x, y, predecessors[0]);
      const line2 = createLinePoint(positionList, x, y, predecessors[1]);
      if (line1) {
        result.push(line1);
      }
      if (line2) {
        result.push(line2);
      }
    }
  }

  return result;
}

function createLinePoint(
  positionList: MatchPositionList,
  x: number,
  y: number,
  predecessor: number | null,
): LinePoint | null {
  if (predecessor) {
    const x1 = getXFromPositionList(predecessor, positionList)! + matchWidth;
    const y1 = getYFromPositionList(predecessor, positionList)! + matchHeight * 0.5;
    return {
      x1,
      y1,
      x2: x,
      y2: y + matchHeight * 0.5,
    };
  }
  return null;
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

  width += matchWidth + 2;
  height += matchHeight + 2;

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
