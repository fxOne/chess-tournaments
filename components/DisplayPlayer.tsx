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
    <span>
      <PlayerTitle title={player.title}>{player.title}</PlayerTitle> {player.name}
    </span>
  );
}
