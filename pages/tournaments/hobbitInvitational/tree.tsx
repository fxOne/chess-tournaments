import Footer from '../../../components/Footer';
import Link from 'next/link';
import Menu from '../../../components/Tournaments/hobbitInvitational/Menu';
import { ReactElement } from 'react';

export default function Tree(): ReactElement {
  return (
    <div>
      <Menu />
      game tree with
      <Link href="series/game1">Link to series</Link>
      <Footer />
    </div>
  );
}
