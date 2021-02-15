import { Player, Series } from '../../data/Interfaces';

import { ReactElement } from 'react';
import TableRow from './TableRow';

interface ResultTableProps {
  player1: Player;
  player2: Player;
  serie: Series;
}

export default function ResultTable({ player1, serie, player2 }: ResultTableProps): ReactElement {
  return (
    <table>
      <tbody>
        <TableRow player={player1} games={serie.games} />
        <TableRow player={player2} games={serie.games} />
      </tbody>
    </table>
  );
}
