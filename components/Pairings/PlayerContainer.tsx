import { ReactElement } from 'react';
import styled from 'styled-components';
import { Player } from '../../data/Interfaces';
import DisplayPlayer from '../DisplayPlayer';
import StreamLink from '../ui/StreamLink';

const PlayerLine = styled.div`
  display: flex;
  justify-content: center;
`;
const Rating = styled.div`
  font-size: 0.75em;
  margin-left: 0.5em;
`;

const StreamerLine = styled.div`
  display: flex;
  justify-content: center;
`;

interface ResultProps {
  isWinner: boolean;
}

const Result = styled.div<ResultProps>`
  color: ${({ isWinner }) => (isWinner ? '#d59020' : 'black')};
  font-size: 1.5em;
  text-align: center;
`;

interface PlayerContainerProps {
  player: Player;
  result: number;
  isWinner: boolean;
}

export default function PlayerContainer({ player, result, isWinner }: PlayerContainerProps): ReactElement {
  return (
    <div>
      <PlayerLine>
        <DisplayPlayer player={player} /> <Rating>({player.elo})</Rating>
      </PlayerLine>
      {player.streamerUrl && (
        <StreamerLine>
          <StreamLink streamLink={player.streamerUrl} fallbackName={player.name} />
        </StreamerLine>
      )}
      {result > 0 && <Result isWinner={isWinner}>{result}</Result>}
    </div>
  );
}
