import { Calendar } from 'lucide-react';
import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { Match, Players } from '../../data/Interfaces';
import DateTime from '../DateTime';
import { calculateSeries } from '../ResultTable/Calculations';
import Button from '../ui/Button';
import PlayerContainer from './PlayerContainer';

const Wrapper = styled.div`
  margin: 1em;
`;
const DateLine = styled.div`
  text-align: center;
`;
const PlayerWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const VsContainer = styled.div`
  margin: 0 1.5rem;
  color: #aaa;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const GameButton = styled.div`
  width: 250px;
`;
const GameContainer = styled.div`
  display: flex;
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

  const resultPlayer1 = calculateSeries(match.series, player1.id);
  const resultPlayer2 = calculateSeries(match.series, player2.id);

  return (
    <Wrapper>
      <DateLine>
        <Calendar size={18} />
        <DateTime dateTime={match.date} />
      </DateLine>
      <GameContainer>
        <PlayerWrapper>
          <PlayerContainer player={player1} result={resultPlayer1} isWinner={resultPlayer1 > resultPlayer2} />
          <VsContainer>VS</VsContainer>
          <PlayerContainer player={player2} result={resultPlayer2} isWinner={resultPlayer2 > resultPlayer1} />
        </PlayerWrapper>
        <GameButton>{hasGames && <Button text={t('gotoGame')} target={getLinkUrl(match.id)} />}</GameButton>
      </GameContainer>
    </Wrapper>
  );
}
