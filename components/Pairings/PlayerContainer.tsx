import { ReactElement } from 'react';
import styled from 'styled-components';
import { Player } from '../../data/Interfaces';
import PlayerTitle from '../ui/PlayerTitle';
import StreamLink from '../ui/StreamLink';

const Rating = styled.span`
  font-size: 0.75em;
  margin: 0 0.5em;
`;

interface ResultProps {
  isWinner: boolean;
}

const Result = styled.div<ResultProps>`
  color: ${({ isWinner }) => (isWinner ? '#d59020' : 'black')};
  margin: 0 0.5em;
  font-weight: bold;
`;

interface PlayerContainerWrapperProps {
  left: boolean;
}

const PlayerContainerWrapper = styled.div<PlayerContainerWrapperProps>`
  text-align: ${({ left }) => (left ? 'right' : 'left')};
  width: 100%;
  display: flex;
  @media screen and (max-width: 620px) {
    flex-direction: column;
    align-items: center;
  }
`;
const PlayerInnerContainerWrapper = styled.div<PlayerContainerWrapperProps>`
  margin-left: ${({ left }) => (left ? 'auto' : '0')};
  @media screen and (max-width: 620px) {
    margin-left: 0;
  }
`;

interface PlayerContainerProps {
  player: Player | null;
  result: number;
  isWinner: boolean;
  left?: boolean;
}

export default function PlayerContainer({
  player,
  result,
  isWinner,
  left = false,
}: PlayerContainerProps): ReactElement {
  return (
    <PlayerContainerWrapper left={left}>
      {!left && result > 0 && <Result isWinner={isWinner}>{result}</Result>}
      <PlayerInnerContainerWrapper left={left}>
        {player?.title && (
          <PlayerTitle title={player.title} rightMargin>
            {player.title}
          </PlayerTitle>
        )}
        {player?.name || 'TBD'}
        {player?.elo && <Rating>{player.elo}</Rating>}
        {player?.streamerUrl && <StreamLink streamLink={player.streamerUrl} showName={false} />}
      </PlayerInnerContainerWrapper>
      {left && result > 0 && <Result isWinner={isWinner}>{result}</Result>}
    </PlayerContainerWrapper>
  );
}
