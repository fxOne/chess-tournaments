import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { Match, Players } from '../../data/Interfaces';
import MatchDetails from '../Match/MatchDetailts';
import MatchHeader from '../Match/MatchHeader';
import MatchResult from '../Match/MatchResult';
import Button from '../ui/Button';

const Wrapper = styled.div`
  margin: 5px;
`;

interface PairingProps {
  match: Match;
  players: Players;
  getLinkUrl(id: number): string;
}

export default function Pairing({ match, players, getLinkUrl }: PairingProps): ReactElement {
  const { t } = useTranslation(['common']);
  const player1 = players[match.player1!];
  const player2 = players[match.player2!];
  const hasGames = Boolean(match.series.length);
  return (
    <Wrapper>
      <MatchHeader player1={player1} player2={player2} />
      <MatchDetails match={match} />
      {hasGames && <MatchResult player1={player1} player2={player2} series={match.series} />}
      {hasGames && <Button text={t('gotoGame')} target={getLinkUrl(match.id)} />}
    </Wrapper>
  );
}
