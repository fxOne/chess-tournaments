import { ReactElement } from 'react';
import styled from 'styled-components';
import LichessStreamerChampionshipPageFrame from '../../../../components/PageFrames/LichessStreamerChampionshipPageFrame';
import Flex from '../../../../components/ui/Flex';
import PlayerCard from '../../../../components/ui/PlayerCard';
import { Player } from '../../../../data/Interfaces';
import { players } from '../../../../data/lichessStreamerChampionship/Players';
import { getStaticPaths, makeStaticProps } from '../../../../lib/getStatic';

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

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
  const sortedPlayers = Object.values(players).sort((a, b) => b.elo - a.elo);
  return (
    <LichessStreamerChampionshipPageFrame
      title={'Spieler'}
      contentDescription="Teilnehmerliste des Lichess Streamer Championship"
    >
      <PlayerInfo>
        <div>
          <div>Spieler: {sortedPlayers.length}</div>
          <div>Durchschnittliche Ratingzahl: {calcAvg(sortedPlayers)}</div>
        </div>
      </PlayerInfo>
      <Flex wrap={'wrap'} justifyContent={'space-between'}>
        {sortedPlayers.map((player) => (
          <PlayerCard player={player} key={player.id} />
        ))}

        {[...new Array(sortedPlayers.length % 4).keys()].map((idx) => (
          <EmptyCard key={idx} />
        ))}
      </Flex>
    </LichessStreamerChampionshipPageFrame>
  );
}
