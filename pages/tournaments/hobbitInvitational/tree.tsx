import HobbitsPageFrame from '../../../components/Tournaments/hobbitInvitational/HobbitsPageFrame';
import Link from 'next/link';
import { ReactElement } from 'react';
import TournamentBracket from '../../../components/TournamentBracket/TournamentBracket';
import { brackets } from '../../../data/hobbitsInvitational/Brackets';
import { matches } from '../../../data/hobbitsInvitational/Games';
import { players } from '../../../data/hobbitsInvitational/Players';

export default function Tree(): ReactElement {
  return (
    <HobbitsPageFrame title={'Tree'}>
      <TournamentBracket brackets={brackets} players={players} matches={matches} />
      game tree with
      <Link href="series/game1">Link to series</Link>
    </HobbitsPageFrame>
  );
}
