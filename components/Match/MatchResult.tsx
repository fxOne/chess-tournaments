import { Player, Series } from '../../data/Interfaces';

import { Header } from './MatchHeader';
import { ReactElement } from 'react';
import { calculateSeries } from '../ResultTable/Calculations';

interface Props {
  player1: Player | null;
  player2: Player | null;
  series: Series[];
}

export default function MatchResult({ player1, player2, series }: Props): ReactElement | null {
  if (!player1 || !player2 || !series.length) {
    return null;
  }
  const resultPlayer1 = calculateSeries(series, player1.id);
  const resultPlayer2 = calculateSeries(series, player2.id);

  return (
    <Header>
      {resultPlayer1} - {resultPlayer2}
    </Header>
  );
}
