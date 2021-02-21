import DisplayPlayer from '../DisplayPlayer';
import Image from 'next/image';
import { Player } from '../../data/Interfaces';
import { ReactElement } from 'react';
import styled from 'styled-components';

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
  display: grid;
  grid-template-columns: max-content max-content;
  grid-column-gap: 1rem;
  margin-top: 1rem;
  width: 100%;
  justify-content: center;
`;

const Label = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: max-content max-content;
  grid-gap: 0.5rem;
  background-color: #fff;
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
`;

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
          <Label>
            <div>Rating</div>
            <div>{player.elo}</div>
          </Label>
          <Label>
            <div>Jahrgang</div>
            <div>{player.yearOfBirth}</div>
          </Label>
        </InfoGrid>
      </Content>
    </Card>
  );
}
