import { Game, Player } from '../../data/Interfaces';
import { ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import DisplayPlayer from '../DisplayPlayer';

const Row = styled.tr`
  height: 1.5em;
  &:first-child {
    border-bottom: 1px solid #ddd;
  }
`;

const NameField = styled.td`
  background-color: #eee;
  padding: 0.5rem 1.25rem 0.5rem 0.75rem;
`;

const GameField = styled.td<{ isWhite: boolean; isWinner: boolean }>`
  ${({ isWhite, isWinner }) => css`
    color: ${isWinner ? 'green' : isWhite ? '#222' : '#F3F3F3'};
    background-color: ${isWhite ? '#EAD9BB' : '#be9e7f'};
  `}
  width: 1.5em;
  text-align: center;
  a {
    color: inherit;
  }
`;

const ResultField = styled.td<{ isWinner: boolean }>`
  text-align: right;
  background-color: #eee;
  font-weight: bold;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  font-feature-settings: 'tnum';
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
            <a href={lichessUrl} target="_blank" rel="noreferrer">
              {printNumber(playerResult)}
            </a>
          </GameField>
        );
      })}
      <ResultField isWinner={isWinner}>{printNumber(sum)}</ResultField>
    </Row>
  );
}
