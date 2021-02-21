import Flex from '../../../components/ui/Flex';
import HobbitsPageFrame from '../../../components/Tournaments/hobbitInvitational/HobbitsPageFrame';
import { Player } from '../../../data/Interfaces';
import PlayerCard from '../../../components/ui/PlayerCard';
import { ReactElement } from 'react';
import { players } from '../../../data/hobbitsInvitational/Players';

function calcAvg(players: Player[]): number {
  const sum = players.reduce((sum, { elo }) => sum + elo, 0);
  return Math.round(sum / players.length);
}

export default function Players(): ReactElement {
  const sortedPlayers = Object.values(players).sort((a, b) => a.name.localeCompare(b.name));
  return (
    <HobbitsPageFrame title={'Players'}>
      <div>Spieler: {sortedPlayers.length}</div>
      <div>Durchschnittliche Ratingzahl: {calcAvg(sortedPlayers)}</div>
      <Flex wrap={'wrap'}>
        {sortedPlayers.map((player) => (
          <PlayerCard player={player} key={player.id} />
        ))}
      </Flex>
    </HobbitsPageFrame>
  );
}
