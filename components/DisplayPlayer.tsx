import Flex from './ui/Flex';
import { Player } from '../data/Interfaces';
import PlayerTitle from './ui/PlayerTitle';
import { ReactElement } from 'react';

interface DisplayPlayerProps {
  player: Player | null;
}

export default function DisplayPlayer({ player }: DisplayPlayerProps): ReactElement | null {
  if (!player) {
    return null;
  }

  return (
    <Flex alignItems={'center'}>
      <PlayerTitle title={player.title} rightMargin>
        {player.title}
      </PlayerTitle>{' '}
      {player.name}
    </Flex>
  );
}
