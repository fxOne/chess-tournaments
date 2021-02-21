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
  margin: 10px;
  background-color: #eee;
  min-height: 347px;
`;

const Content = styled.div`
  padding: 10px;
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
        <div>Rating: {player.elo}</div>
        <div>Jahrgang: {player.yearOfBirth}</div>
      </Content>
    </Card>
  );
}
