import { Game, Player } from '../../data/Interfaces';
import { ReactElement, ReactNode } from 'react';

import DisplayPlayer from '../DisplayPlayer';
import styled from 'styled-components';

const Row = styled.tr`
  height: 1.5em;
`;

const NameField = styled.td`
  background-color: lightgray;
`;

const GameField = styled.td<{ isWhite: boolean; isWinner: boolean }>`
  color: ${({ isWhite, isWinner }) => (isWinner ? 'green' : isWhite ? 'black' : 'white')};
  background-color: ${({ isWhite }) => (isWhite ? 'white' : '#732e2e')};
  width: 1.5em;
  text-align: center;
  a {
    color: inherit;
  }
`;

const ResultField = styled.td<{ isWinner: boolean }>`
  width: 2.5em;
  text-align: right;
  background-color: #d1e4f6;
  color: ${({ isWinner }) => (isWinner ? 'green' : 'red')};
`;

function printNumber(number: number): ReactNode {
  const result = Math.floor(number);
  if (number % 1 === 0.5) {
    return <>{result ? result : ''}&frac12;</>;
  }
  return result;
}

interface TableRowProps {
  player: Player;
  games: Game[];
  sum: number;
  isWinner: boolean;
}

export default function TableRow({ player, games, sum, isWinner }: TableRowProps): ReactElement {
  return (
    <Row>
      <NameField>
        <DisplayPlayer player={player} />
      </NameField>
      {games.map(({ userIdWhite, result, lichessUrl }, i) => {
        const isWhite = player.id === userIdWhite;
        const playerResult = isWhite ? result : 1 - result;
        return (
          <GameField key={i} isWhite={isWhite} isWinner={playerResult === 1}>
            <a href={lichessUrl} target="_black" rel="noreferrer">
              {printNumber(playerResult)}
            </a>
          </GameField>
        );
      })}
      <ResultField isWinner={isWinner}>{printNumber(sum)}</ResultField>
    </Row>
  );
}
