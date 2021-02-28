import Flex from '../../../../components/ui/Flex';
import HobbitsPageFrame from '../../../../components/Tournaments/hobbitInvitational/HobbitsPageFrame';
import { Player } from '../../../../data/Interfaces';
import PlayerCard from '../../../../components/ui/PlayerCard';
import { ReactElement } from 'react';
import { players } from '../../../../data/hobbitsInvitational/Players';
import styled from 'styled-components';

function calcAvg(players: Player[]): number {
  const sum = players.reduce((sum, { elo }) => sum + elo, 0);
  return Math.round(sum / players.length);
}

const PlayerInfo = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  box-sizing: border-box;
  margin-bottom: 1rem;
`;

const EmptyCard = styled.div`
  width: calc(300px + 1rem);
`;

export default function Players(): ReactElement {
  const sortedPlayers = Object.values(players).sort((a, b) => a.name.localeCompare(b.name));
  return (
    <HobbitsPageFrame title={'Spieler'}>
      <PlayerInfo>
        <div>
          <div>Spieler: {sortedPlayers.length}</div>
          <div>Durchschnittliche Ratingzahl: {calcAvg(sortedPlayers)}</div>
        </div>
        <div>FIDE-Ratings von Februar 2021</div>
      </PlayerInfo>
      <Flex wrap={'wrap'} justifyContent={'space-between'}>
        {sortedPlayers.map((player) => (
          <PlayerCard player={player} key={player.id} />
        ))}

        {[...new Array(sortedPlayers.length % 4).keys()].map((idx) => (
          <EmptyCard key={idx} />
        ))}
      </Flex>
    </HobbitsPageFrame>
  );
}
