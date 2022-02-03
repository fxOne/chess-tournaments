import { Calendar } from 'lucide-react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { Match, Player, Players } from '../../data/Interfaces';
import DateTime from '../DateTime';
import { calculateSeries } from '../ResultTable/Calculations';
import PlayerContainer from './PlayerContainer';

interface WrapperProps {
  noDate?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  margin: ${({ noDate }) => (noDate ? '0.5em 1em' : '1.5em 1em')};
  @media screen and (max-width: 620px) {
    margin: ${({ noDate }) => (noDate ? '2.5em 1em' : '1.5em 1em')};
  }
`;
const DateLine = styled.div`
  text-align: center;
  margin: 0 200px 5px 0;
  @media screen and (max-width: 620px) {
    margin-right: 0;
  }
`;

const PlayerWrapper = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 620px) {
    flex-direction: column;
    align-items: center;
  }
`;

const VsContainer = styled.div`
  margin: 0 0.5em;
  color: #aaa;
`;
const GameButton = styled.div`
  width: 200px;
  text-align: center;
  flex-shrink: 0;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;
const GameContainer = styled.div`
  display: flex;
  @media screen and (max-width: 620px) {
    flex-direction: column;
    align-items: center;
  }
`;

interface PairingProps {
  match: Match;
  players: Players;
  getLinkUrl(id: number): string;
  noDate?: boolean;
}

export default function Pairing({ match, players, getLinkUrl, noDate }: PairingProps): ReactElement {
  const { t } = useTranslation(['common']);
  const player1: Player | null = match.player1 ? players[match.player1] : null;
  const player2: Player | null = match.player2 ? players[match.player2] : null;

  const hasGames = Boolean(match.series.length);

  const resultPlayer1 = player1 ? calculateSeries(match.series, player1.id) : 0;
  const resultPlayer2 = player2 ? calculateSeries(match.series, player2.id) : 0;

  return (
    <Wrapper noDate={noDate}>
      {match.date !== 'unbekannt' && (
        <DateLine>
          <Calendar size={18} /> <DateTime dateTime={match.date} />
        </DateLine>
      )}
      <GameContainer>
        <PlayerWrapper>
          <PlayerContainer player={player1} result={resultPlayer1} isWinner={resultPlayer1 > resultPlayer2} left />
          <VsContainer>vs</VsContainer>
          <PlayerContainer player={player2} result={resultPlayer2} isWinner={resultPlayer2 > resultPlayer1} />
        </PlayerWrapper>
        <GameButton>{hasGames && <Link href={getLinkUrl(match.id)}>{t('gotoGame')}</Link>}</GameButton>
      </GameContainer>
    </Wrapper>
  );
}
