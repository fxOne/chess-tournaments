import HobbitsPageFrame from '../../../components/Tournaments/hobbitInvitational/HobbitsPageFrame';
import Link from 'next/link';
import { ReactElement } from 'react';

export default function Tree(): ReactElement {
  return (
    <HobbitsPageFrame title={'Tree'}>
      game tree with
      <Link href="series/game1">Link to series</Link>
    </HobbitsPageFrame>
  );
}
