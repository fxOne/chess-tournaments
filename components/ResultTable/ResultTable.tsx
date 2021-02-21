import { Player, Series } from '../../data/Interfaces';

import { ReactElement } from 'react';
import TableRow from './TableRow';
import { calculateSum } from './Calculations';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  border: inset 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
`;

interface ResultTableProps {
  player1: Player;
  player2: Player;
  serie: Series;
}

export default function ResultTable({ player1, serie, player2 }: ResultTableProps): ReactElement {
  const player1Result = calculateSum(serie.games, player1.id);
  const player2Result = calculateSum(serie.games, player2.id);
  return (
    <Table>
      <tbody>
        <TableRow player={player1} games={serie.games} sum={player1Result} isWinner={player1Result >= player2Result} />
        <TableRow player={player2} games={serie.games} sum={player2Result} isWinner={player2Result >= player1Result} />
      </tbody>
    </Table>
  );
}
