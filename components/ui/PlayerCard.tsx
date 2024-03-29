import Image from 'next/image';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { Player } from '../../data/Interfaces';
import DisplayPlayer from '../DisplayPlayer';

interface PlayerCardProps {
  player: Player;
}

const Card = styled.div`
  width: 300px;
  margin: 0.5rem;
  background-color: #eee;
  min-height: 347px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
`;

const Content = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1.3rem;
`;

const InfoGrid = styled.div`
  font-size: 1rem;
  display: flex;
  margin-top: 1rem;
  width: 100%;
  flex-wrap: wrap;
`;

const Label = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: max-content max-content;
  grid-gap: 0.5rem;
  background-color: #fff;
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  text-decoration: none;
  margin: 0.25rem;
`;

const StyledLink = styled.a`
  color: black;
`;

function getDisplayStreamerUrl(url: string): string {
  if (url.includes('youtube')) {
    return 'Youtube';
  }
  return 'Twitch';
}

export default function PlayerCard({ player }: PlayerCardProps): ReactElement {
  return (
    <Card>
      {player.image && (
        <Image
          loading={'eager'}
          src={player.image}
          alt={player.name}
          layout={'fixed'}
          objectFit={'cover'}
          objectPosition={'center top'}
          width="300px"
          height="250px"
        />
      )}
      <Content>
        <DisplayPlayer player={player} />
        <InfoGrid>
          {player.elo > 0 && (
            <Label>
              <div>Rating</div>
              <div>{player.elo}</div>
            </Label>
          )}
          {player.yearOfBirth && (
            <Label>
              <div>Jahrgang</div>
              <div>{player.yearOfBirth}</div>
            </Label>
          )}
          {player.lichessName && (
            <Label>
              <div>Lichess</div>
              <StyledLink href={`https://lichess.org/@/${player.lichessName}`} target="_blank" rel="noreferrer">
                <div>{player.lichessName}</div>
              </StyledLink>
            </Label>
          )}
          {player.streamerUrl && (
            <Label>
              <div>Stream</div>
              <StyledLink href={player.streamerUrl} target="_blank" rel="noreferrer">
                <div>{getDisplayStreamerUrl(player.streamerUrl)}</div>
              </StyledLink>
            </Label>
          )}
        </InfoGrid>
      </Content>
    </Card>
  );
}
